import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Ticket } from '../model/ticket.interface';
import { TicketsService } from '../service/tickets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonModal, Platform, ScrollDetail, ToastController } from '@ionic/angular';
import { ThreeDSResponse } from '../model/threeds-response.interface';
import { Customization } from '../model/customization.interface';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;
  litle_text: boolean = false;
  title_show_android: boolean = false;
  title_show_ios: boolean = true;

  loading: boolean = false;

  ticketId!: string;
  ticket!: Ticket;

  unreadCount: number = 0;

  customization!: Customization;

  assignationForm!: FormGroup;

  public actionSheetButtons = [
    {
      text: 'Reasignar',
      data: {
        action: 'reassign',
      }
    },
    {
      text: 'Ver evento',
      data: {
        action: 'view',
      }
    }
  ];

  constructor(private ticketService: TicketsService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private toastController: ToastController, public alert: AlertController, public platform: Platform) {

  }

  ngOnInit() {
    this.assignationForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });



    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.ticketId = params.params.id;
      this.handleRefresh(undefined);

      this.ticketService.countUnreadNotifications(params.params.id).subscribe(response => this.unreadCount = response.count);

      this.ticketService.getCustomisation(this.ticketId).subscribe((response: Customization) => {
        this.customization = response;
      });
    });

    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      const paymentIntent = params.get('payment_intent');
      const paymentIntentClientSecret = params.get('payment_intent_client_secret');
      const sourceRedirectSlug = params.get('source_redirect_slug');

      if (paymentIntent) {
        this.ticketService.confirm(this.ticketId, paymentIntent).subscribe((response: ThreeDSResponse) => {

          this.handleThreeDSResponse(response, this.onPurchaseSucceeded, undefined, this.onPurchaseFailed);
          if (response.status === 'succeeded') {
            this.handleRefresh(undefined);
          }
        });
      }
    });

  }

  /**
 * Purchase succeeded handler
 * @param response the response object
 * @param context the controller context
 */
  onPurchaseSucceeded(response: ThreeDSResponse, context: any): void {
    context.presentToast('Compra finalizada correctamente', 'success');
    context.handleRefresh(undefined);
  }

  onPurchaseFailed(response: ThreeDSResponse, context: any): void {
    context.presentToast('La compra ha fallado', 'danger');
  }

  handleRefresh($event: any | undefined) {
    this.ticketService.getTicket(this.ticketId).subscribe((response: Ticket) => {
      this.ticket = response;
      /*if (this.ticket.hasPassphrase) {
        this.launchTimer();
      }*/
      if ($event) {
        $event.target.complete();
      }
    });
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

  openEvent(): void {
    //FIXME: open embedded browser if possible
    window.open(this.ticket.event.url, '_blank');
  }

  reassign(): void {
    this.modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.loading = true;
    this.ticketService.assignTicket(this.ticketId, this.assignationForm.value).subscribe(() => {
      this.loading = false;
      this.modal.dismiss(null, 'cancel');
      this.router.navigate(['/tickets']);
    }, () => {
      this.loading = false;
    });

  }

  handleAction($event: any): void {
    if ($event.detail && $event.detail.data && $event.detail.data.action) {
      switch ($event.detail.data.action) {
        case 'reassign':
          this.reassign();
          break;
        case 'view':
          this.openEvent();
          break;
      }
    }
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



}
