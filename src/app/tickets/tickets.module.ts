import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TicketsComponent } from './tickets.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TicketsComponent],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ExploreContainerComponentModule,
    TicketsRoutingModule
  ]
})
export class TicketsPageModule { }
