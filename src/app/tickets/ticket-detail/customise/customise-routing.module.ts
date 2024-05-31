import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomisePage } from './customise.page';

const routes: Routes = [
  {
    path: '',
    component: CustomisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomisePageRoutingModule {}
