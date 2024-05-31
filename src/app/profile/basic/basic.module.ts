import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicPageRoutingModule } from './basic-routing.module';

import { BasicPage } from './basic.page';
import { MaskitoModule } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicPageRoutingModule,
    MaskitoModule,
    ReactiveFormsModule
  ],
  declarations: [BasicPage]
})
export class BasicPageModule { }
