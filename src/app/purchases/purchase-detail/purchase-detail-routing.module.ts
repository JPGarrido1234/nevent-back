import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchaseDetailComponent } from "./purchase-detail.component";

const routes: Routes = [
    {
        path: '',
        component: PurchaseDetailComponent,
        children: [
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseDetailRoutingModule { }