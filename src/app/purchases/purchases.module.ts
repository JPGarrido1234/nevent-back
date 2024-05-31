import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PurchasesComponent } from './purchases.component';
import { PurchaseItemComponent } from './components/purchase-item/purchase-item.component';



@NgModule({
  declarations: [PurchasesComponent, PurchaseItemComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CommonModule,
    PurchasesRoutingModule
  ]
})
export class PurchasesPageModule { }
