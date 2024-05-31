import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokenMessagesPageRoutingModule } from './token-messages-routing.module';

import { TokenMessagesPage } from './token-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokenMessagesPageRoutingModule
  ],
  declarations: [TokenMessagesPage]
})
export class TokenMessagesPageModule {}
