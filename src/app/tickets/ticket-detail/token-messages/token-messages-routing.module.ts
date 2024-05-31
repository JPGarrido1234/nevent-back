import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenMessagesPage } from './token-messages.page';

const routes: Routes = [
  {
    path: '',
    component: TokenMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenMessagesPageRoutingModule {}
