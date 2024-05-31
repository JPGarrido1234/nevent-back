import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokenInfoPageRoutingModule } from './token-info-routing.module';

import { TokenInfoPage } from './token-info.page';
import { TokenItemComponent } from '../../components/token-item/token-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokenInfoPageRoutingModule
  ],
  declarations: [TokenInfoPage, TokenItemComponent]
})
export class TokenInfoPageModule { }
