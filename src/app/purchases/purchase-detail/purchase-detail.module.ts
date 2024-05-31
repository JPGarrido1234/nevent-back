import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { PurchaseDetailRoutingModule } from './purchase-detail-routing.module';
import { PurchaseDetailComponent } from './purchase-detail.component';



@NgModule({
  declarations: [PurchaseDetailComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    CommonModule,
    PurchaseDetailRoutingModule
  ]
})
export class PurchaseDetailModule { }
