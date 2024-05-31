import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketsComponent } from "./tickets.component";

const routes: Routes = [
    {
        path: '',
        component: TicketsComponent,
        children: [
        ]
    },
    {
        path: ':id',
        loadChildren: () => import('./ticket-detail/ticket-detail.module').then(m => m.TicketDetailModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketsRoutingModule { }