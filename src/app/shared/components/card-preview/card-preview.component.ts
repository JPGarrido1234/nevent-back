import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentMethod } from '../../../profile/model/payment-method.interface';
import { ProfileService } from '../../../profile/services/profile.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit {

  @Input() selected: boolean = false;
  @Input() index!: number;
  @Input() paymentMethod!: PaymentMethod;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Input() text_action: boolean = false;
  isAlertOpen: boolean = false;

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.isAlertOpen = false;
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.delete();
      },
    },
  ];

  constructor(private profileService: ProfileService, private alertController: AlertController) { }

  ngOnInit(): void {
  }

  getBrandIcon(): any {
    if (this.paymentMethod && this.paymentMethod.card.brand === 'visa') {
      return '../../assets/images/visa.svg';
    }
    if (this.paymentMethod && this.paymentMethod.card.brand === 'mastercard') {
      return '../../assets/images/mastercard.svg';
    }
    if (this.paymentMethod && this.paymentMethod.card.brand === 'amex') {
      return '../../assets/images/amex.svg';
    }

    return '../../assets/images/generic.svg';
  }

  delete(): void {
    this.profileService.removePaymentMethod(this.paymentMethod.id).subscribe(() => {
      this.onDelete.emit(this.index);
    });
  }

  async setOpen() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: '¿Estás seguro?',
      message: 'Estás a punto de eliminar tu método de pago',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'alert-button-cancel',
          handler: (data) => {
            alert.dismiss()
          }
        },
        {
          text: 'Eliminar',
          cssClass: 'alert-button-confirm',
          handler: (data) => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();
  }

}