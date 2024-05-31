import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenInfoPage } from './token-info.page';

const routes: Routes = [
  {
    path: '',
    component: TokenInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenInfoPageRoutingModule {}
