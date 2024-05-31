import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../service/tickets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Advertisment, Customization, Experience } from '../../model/customization.interface';
import { CartItem, TokenUpgradeType } from '../../model/cart-item.interface';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { PaymentMethod } from 'src/app/profile/model/payment-method.interface';
import { ModalController, ScrollDetail, ToastController } from '@ionic/angular';
import { ThreeDSResponse } from '../../model/threeds-response.interface';
declare var Stripe: (arg0: string) => any;
import * as Sentry from "@sentry/angular-ivy";

@Component({
  selector: 'app-customise',
  templateUrl: './customise.page.html',
  styleUrls: ['./customise.page.scss'],
})
export class CustomisePage implements OnInit {
  litle_text: boolean = false;
  purchasing: boolean = false;
  showCardSelectionModal: boolean = false;
  ticketId!: string;
  customization!: Customization;
  cart: CartItem[] = [];
  stripe = Stripe(environment.stripe.pk);
  cartTotal: number = 0.00;
  cartItems: number = 0;
  paymentMethods: PaymentMethod[] = [];
  selectedPaymentMethodId: string | undefined = 'wallet';
  selectedPaymentMethodValue: string | undefined = 'Apple Pay / Google Pay';
  selectedPaymentMethodBrand: string | undefined = 'wallet';
  expressCheckoutLoaded: boolean = false;
  expressChekoutAvailable: boolean = false;
  text_action: boolean = false;
  showWallet: boolean = true;

  appearance: any = { /* appearance */ }
  options: any = {
    buttonType: {
      applePay: 'plain',
      googlePay: 'plain'
    },
    wallets: {
      applePay: 'auto',
      googlePay: 'auto'
    },
    layout: {
      maxColumns: 1,
      maxRows: 1
    },
    paymentMethodOrder: ['applePay', 'googlePay', 'paypal'],
    buttonTheme: {
      applePay: 'white',
      googlePay: 'white',
      paypal: 'white'
    },
    buttonHeight: 55
  }
  elements: any;
  expressCheckoutElement: any;

  constructor(private modalCtrl: ModalController, private ticketsService: TicketsService, private profileService: ProfileService, private activatedRoute: ActivatedRoute, private _location: Location, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.ticketId = params.params.id;
      this.handleRefresh();
    });
    this.initExpressCheckout();
  }

  handleRefresh(): void {
    this.ticketsService.getCustomisation(this.ticketId).subscribe((response: Customization) => {
      this.customization = response;
    });
    this.profileService.getPaymentMethod().subscribe((paymentMethods: PaymentMethod[]) => {
      this.paymentMethods = paymentMethods;
    });
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

  onQuantityChange($event: any, item: Experience) {

    this.addItemToCart($event, {
      id: item.id,
      price: item.displayPrice,
      quantity: $event,
      type: TokenUpgradeType.EXPERIENCE,
      variants: []
    });
  }

  onQuantityChangeAdvertisement($event: any, item: Advertisment) {

    this.addItemToCart($event, {
      id: item.id,
      price: item.displayPrice,
      quantity: $event,
      type: TokenUpgradeType.ADVERTISEMENT,
      variants: []
    })
  }

  emptyCart(): void {

    this.cartTotal = 0;
    this.cartItems = 0;
    this.cart = [];
    this._location.back();
  }

  selectCardModal(): void {
    this.showCardSelectionModal = true;
  }

  purchase(): void {
    this.purchasing = true;
    this.ticketsService.upgrade(this.ticketId, this.selectedPaymentMethodId, this.cart).subscribe((response: ThreeDSResponse) => {
      this.handleThreeDSResponse(response, this.onPurchaseSucceeded, this.onRequiresAction, this.onPurchaseFailed);
    }, () => {
      this.presentToast('Ha ocurrido un error', 'danger');
    });

  }

  onRequiresAction(response: ThreeDSResponse, context: any): void {
    context.stripe.handleNextAction({
      clientSecret: response.secret
    }).then((result: any) => {
      if (result.error) {

        Sentry.captureMessage(result.error);
      } else {

        this.handleThreeDSResponse(response, this.onPurchaseSucceeded, this.onRequiresAction, this.onPurchaseFailed);
      }
    });
  }

  /**
   * Purchase succeeded handler
   * @param response the response object
   * @param context the controller context
   */
  onPurchaseSucceeded(response: ThreeDSResponse, context: any): void {

    context.ticketsService.confirm(context.ticketId, response.paymentIntentId).subscribe((response: ThreeDSResponse) => {

      if (response.status !== 'succeeded') {

        context.handleThreeDSResponse(response, context.onPurchaseSucceeded, context.onRequiresAction, context.onPurchaseFailed);
      } else {

        context.presentToast('Compra finalizada correctamente', 'success');
        context.purchasing = false;
        context.emptyCart();
      }
    }, () => {
      context.presentToast('Ha ocurrido un error', 'danger');
      context.purchasing = false;
    });

  }

  onPurchaseFailed(response: ThreeDSResponse, context: any): void {
    context.presentToast('La compra ha fallado', 'error');
    context.purchasing = false;
  }


  private addItemToCart($event: number, item: CartItem): void {

    const index = this.cart.findIndex(cartItem => cartItem.id === item.id);

    if (index !== -1) {

      const current = this.cart[index];

      item.quantity = current.quantity + $event;

      if (item.quantity !== 0) {
        this.cart[index] = item;
      } else {
        this.cart.splice(index, 1);
      }
    } else {
      this.cart.push(item);
    }

    this.updateTotals();

  }

  /**
   * Recalculates the full cart
   */
  private updateTotals() {

    // Init to zero
    this.cartTotal = 0.00;
    this.cartItems = 0;

    for (let item of this.cart) {

      this.cartItems += item.quantity;
      this.cartTotal += item.price * item.quantity;
    }

    if (this.cartTotal > 0) {

      this.elements.update({ amount: this.cartTotal })
    }

  }

  /**
   * Handles the selection of a payment method
   * 
   * @param paymentMethodId the payment method id
   * @param paymentMethodValue the payment method value to show on the selector
   * @param paymentMethodBrand the payment method brand to show the icon 
   */
  selectPaymentMethod(paymentMethodId: string, paymentMethodValue: string, paymentMethodBrand: string): void {

    this.showCardSelectionModal = false;
    this.selectedPaymentMethodId = paymentMethodId;
    this.selectedPaymentMethodValue = paymentMethodValue;
    this.selectedPaymentMethodBrand = paymentMethodBrand;

  }

  redirectToCreateCart(): void {

    this.cartTotal = 0;
    this.cartItems = 0;
    this.cart = [];

    this.modalCtrl.dismiss({
      'dismissed': true
    }).then(() => {
      this.router.navigate(['/profile', 'create-card']);
    });
  }

  getBrandIcon(brand: string | undefined): string {

    if (brand === 'visa') {
      return '../../../../assets/images/visa.svg';
    }
    if (brand === 'mastercard') {
      return '../../../../assets/images/mastercard.svg';
    }
    if (brand === 'amex') {
      return '../../../../assets/images/amex.svg';
    }

    return '../../../../assets/images/generic.svg';
  }

  private handleThreeDSResponse(response: ThreeDSResponse, successCallbackFn: any, requiresActionCallbackFn: any, errorCallbackFn: any): void {

    switch (response.status) {
      case 'succeeded':
        successCallbackFn(response, this);
        break;
      case 'failed':
        this.presentToast(response.errorMessage, 'danger');
        errorCallbackFn(response, this);
        break;
      case 'requires_action':
        requiresActionCallbackFn(response, this);
        break;
    }

  }

  async presentToast(message: string, type: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3500,
      position: 'bottom',
      color: type
    });

    await toast.present();
  }

  paymentModalDidPresent(): void {

    if (this.cartTotal > 0) {

      this.showExpressCheckoutElement();

    } else {
      this.expressCheckoutLoaded = true;
    }

  }

  private showExpressCheckoutElement(): void {

    this.expressCheckoutLoaded = false;

    if (!this.elements) {

      this.elements = this.stripe.elements({
        mode: 'payment',
        amount: this.cartTotal,
        currency: 'eur',
        appearance: this.appearance,
      });
    }

    if (!this.expressCheckoutElement) {

      this.expressCheckoutElement = this.elements.create('expressCheckout', this.options);
    }

    this.expressCheckoutElement.mount('#express-checkout-element');

  }

  private initExpressCheckout(): void {

    this.elements = this.stripe.elements({
      mode: 'payment',
      amount: 100,
      currency: 'eur',
      appearance: this.appearance,
    });

    this.expressCheckoutElement = this.elements.create('expressCheckout', this.options);

    this.expressCheckoutElement.on('ready', (response: any) => {
      this.expressCheckoutLoaded = true;
      if (!response.availablePaymentMethods) {
        this.expressChekoutAvailable = false;
        this.selectedPaymentMethodId = undefined;
        this.selectedPaymentMethodValue = 'Selecciona un método de pago';
        this.selectedPaymentMethodBrand = undefined;
      } else {
        // Optional: Animate in the Element

        this.expressChekoutAvailable = true;
      }
    });

    this.expressCheckoutElement.on('confirm', (event: any) => {

      this.ticketsService.upgrade(this.ticketId, this.selectedPaymentMethodId, this.cart, event?.billingDetails).subscribe((response: ThreeDSResponse) => {
        const clientSecret = response.secret;
        console.log(`${window.location.href.split('/').slice(0, -1).join('/')}?payment_intent=${response.paymentIntentId}`);
        this.stripe.confirmPayment({
          elements: this.elements,
          clientSecret,
          confirmParams: {
            return_url: `${window.location.href.split('/').slice(0, -1).join('/')}?payment_intent=${response.paymentIntentId}`
          },
        })
          .then((result: any) => {
            if (result.error) {

              this.presentToast(result.error, 'danger');
            }
          });
      }, () => {
        this.presentToast('Ha ocurrido un error', 'danger');
      });

    });

    this.expressCheckoutElement.on('click', (event: any) => {
      const options = {
        emailRequired: true,
        phoneNumberRequired: true
      };
      event.resolve(options);
    });

    this.expressCheckoutElement.on('cancel', () => {

      this.presentToast('Has cancelado el pago, por favor, vuelve a intentarlo', 'danger');
    });
  }

}

