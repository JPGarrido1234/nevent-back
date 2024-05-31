import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './service/purchase.service';
import { PurchasePreview } from './model/purchase-preview';
import { UnassignedTicket } from '../core/model/unassigned-ticket.interface';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  litle_text: boolean = false;
  purchases: PurchasePreview[] = [];
  showingPurchases: PurchasePreview[] = [];
  unassignedTickets: UnassignedTicket[] = [];
  filterActive: boolean = false;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.refreshPurchases(undefined);
  }

  handleRefresh($event: any) {
    this.refreshPurchases($event);
  }

  private refreshPurchases($event: any | undefined) {
    this.purchaseService.getPurchaseList().subscribe((response: PurchasePreview[]) => {
      this.purchases = response;
      this.showingPurchases = this.purchases;
      if ($event) {
        $event.target.complete();
      }
    });
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }


}
