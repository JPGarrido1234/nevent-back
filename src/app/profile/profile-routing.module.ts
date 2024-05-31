import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
        ]
    },
  {
    path: 'create-card',
    loadChildren: () => import('./create-card/create-card.module').then( m => m.CreateCardPageModule)
  },
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic.module').then( m => m.BasicPageModule)
  },
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then( m => m.PublicPageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }