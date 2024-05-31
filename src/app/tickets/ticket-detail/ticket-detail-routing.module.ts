import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketDetailComponent } from "./ticket-detail.component";

const routes: Routes = [
  {
    path: '',
    component: TicketDetailComponent,
    children: [
    ]
  },
  {
    path: 'messages',
    loadChildren: () => import('./token-messages/token-messages.module').then(m => m.TokenMessagesPageModule)
  },
  {
    path: 'customise',
    loadChildren: () => import('./customise/customise.module').then(m => m.CustomisePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./token-info/token-info.module').then(m => m.TokenInfoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketDetailRoutingModule { }