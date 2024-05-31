import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseDetail, TicketOwnerDetail } from '../model/purchase-detail';
import { PurchaseService } from '../service/purchase.service';
import { ActivatedRoute } from '@angular/router';
import { IonModal, ScrollDetail } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.scss'],
})
export class PurchaseDetailComponent implements OnInit {

  litle_text: boolean = false;

  @ViewChild(IonModal)
  modal!: IonModal;

  loading: boolean = false;
  purchaseId!: string;
  purchase!: PurchaseDetail;
  unnasignedTickets: TicketOwnerDetail[] = [];

  selectedTicketId!: string;
  assignationForm!: FormGroup;

  constructor(private purchaseService: PurchaseService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.loading = true;
    this.assignationForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.purchaseId = params.params.id;
      this.purchaseService.getPurchaseDetails(this.purchaseId).subscribe((response: PurchaseDetail) => {
        this.loading = false;
        this.purchase = response;
        this.unnasignedTickets = response.tickets && response.tickets.filter((ticket: TicketOwnerDetail) => ticket.ownerId === undefined || ticket.ownerId === null) || [];
        console.log('-----unnasignedTickets---------');
        console.log(this.unnasignedTickets);
      }, () => {
        this.loading = false;
      });
    });
  }

  getPurchaseProducts(purchase: PurchaseDetail): any[] {

    if (purchase) {

      return purchase.movements.filter(movement => movement.type === 'PRODUCT');
    } else {

      return [];
    }

  }

  getPurchaseExperiences(purchase: PurchaseDetail): any[] {

    if (purchase) {

      return purchase.movements.filter(movement => movement.type === 'EXPERIENCE');
    } else {

      return [];
    }
  }

  showAssignationForm(ticketId: string): void {
    this.selectedTicketId = ticketId;
    this.modal.present();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.loading = true;
    this.purchaseService.assignTicket(this.purchaseId, this.selectedTicketId, this.assignationForm.value).subscribe(() => {
      this.loading = false;
      this.modal.dismiss(null, 'cancel');
    }, () => {
      this.loading = false;
    });

  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

}
