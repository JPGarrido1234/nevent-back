import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomisePageRoutingModule } from './customise-routing.module';

import { CustomisePage } from './customise.page';
import { UpsellingItemComponent } from './components/upselling-item/upselling-item.component';
import { CrosssellingItemComponent } from './components/crossselling-item/crossselling-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    CustomisePageRoutingModule
  ],
  declarations: [CustomisePage, UpsellingItemComponent, CrosssellingItemComponent]
})
export class CustomisePageModule { }
