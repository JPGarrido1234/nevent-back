import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    IonicModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ExploreContainerComponentModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomePageModule { }
