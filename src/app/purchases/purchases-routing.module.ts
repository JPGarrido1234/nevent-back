import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchasesComponent } from "./purchases.component";

const routes: Routes = [
    {
        path: '',
        component: PurchasesComponent,
        children: [
        ]
    },
    {
        path: ':id',
        loadChildren: () => import('./purchase-detail/purchase-detail.module').then(m => m.PurchaseDetailModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchasesRoutingModule { }