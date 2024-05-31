import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
declare var Stripe: (arg0: string) => any;
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ScrollDetail, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.page.html',
  styleUrls: ['./create-card.page.scss'],
})
export class CreateCardPage implements OnInit {

  litle_text: boolean = false;
  setupIntentId!: string;
  paymentMethodId!: string;
  stripe = Stripe(environment.stripe.pk);
  card: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  creating: boolean = false;

  constructor(private profileService: ProfileService, private router: Router, private _location: Location, private toastController: ToastController) { }

  ngOnInit() {
    this.profileService.createSetupIntent().subscribe(response => {
      this.setupIntentId = response.created;
    });
    this.setupStripe();
  }

  confirmSetupIntent(): void {
    if (this.setupIntentId) {

      this.profileService.confirmSetupIntent(this.setupIntentId, this.paymentMethodId).subscribe(() => { });
    } else {

      console.error('No setup intent id');
    }
  }

  cancelSetupIntent(): void {

    this.profileService.cancelSetupIntent(this.setupIntentId).subscribe(() => { });
    this._location.back();
  }

  createCard(): void {

    this.creating = true;

    this.stripe.createPaymentMethod({
      type: 'card',
      card: this.cardNumber
    }).then((result: any) => {
      this.profileService.confirmSetupIntent(this.setupIntentId, result.paymentMethod.id).subscribe((result: any) => {
        if (result && result.status) {
          if (result.status === 'requires_action') {
            this.stripe.handleNextAction({
              clientSecret: result.secret
            }).then((result: any) => {
              if (result.error) {

                this.creating = false;
                this.presentToast(result.errorMessage, 'danger');
              } else {

                if (result.setupIntent.status === 'succeeded') {

                  this.creating = false;
                  this.router.navigate(['/profile'])
                }
              }
            });
          } else if (result.status === 'succeeded' || result.status === 'requires_payment_method') {

            this.creating = false;
            this.presentToast('Método de pago añadido correctamente', 'success');
            this.router.navigate(['/profile'])
          } else {

            this.creating = false;
            this.presentToast(result.errorMessage, 'danger');
          }
        }
      });
    });
  }

  private setupStripe(): void {

    let elements = this.stripe.elements();
    var style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: 'Poppins, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '18px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    this.cardNumber = elements.create('cardNumber', { style: style, showIcon: true });
    this.cardExpiry = elements.create('cardExpiry', { style: style });
    this.cardCvc = elements.create('cardCvc', { style: style });

    this.cardNumber.mount('#card-number-element');
    this.cardExpiry.mount('#card-expiry-element');
    this.cardCvc.mount('#card-cvc-element');

    this.cardNumber.addEventListener('change', (event: any) => {
      var displayError = document.getElementById('card-number-errors');
      if (displayError) {
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      }
    });

    this.cardExpiry.addEventListener('change', (event: any) => {
      var displayError = document.getElementById('card-expiry-errors');
      if (displayError) {
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      }
    });

    this.cardCvc.addEventListener('change', (event: any) => {
      var displayError = document.getElementById('card-cvc-errors');
      if (displayError) {
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      }
    });
  }

  async presentToast(message: string, type: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: type
    });

    await toast.present();
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

}
