import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PaymentMethod } from '../model/payment-method.interface';
import { ProfileService } from '../services/profile.service';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  litle_text: boolean = false;
  reloadPending: boolean = false;
  loading: boolean = false;
  updateLoading: boolean = false;
  @Input() text_action: boolean = false;
  show_delete: boolean = false;

  paymentMethods: PaymentMethod[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.refreshPaymentMethod();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['reloadPending'] && changes['reloadPending'].currentValue) {
      this.refreshPaymentMethod();
      this.reloadPending = false;
    }
  }

  refreshPaymentMethod() {
    this.profileService.getPaymentMethod().subscribe((response: PaymentMethod[]) => {
      this.paymentMethods = response;
    });
  }

  removeFromList($event: number) {

    this.paymentMethods.splice($event, 1);
    this.show_delete = true;
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

  onClickAction() {
    this.text_action = !this.text_action;
  }

}
