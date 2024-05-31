import { Component, OnInit } from '@angular/core';
import { Ticket } from './model/ticket.interface';
import { TicketsService } from './service/tickets.service';
import { Router } from '@angular/router';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {

  loading: boolean = false;
  tickets: Ticket[] = [];
  litle_text: boolean = false;

  constructor(private ticketService: TicketsService, private router: Router) { }

  ngOnInit() {
    this.refreshTickets(undefined);
  }

  handleRefresh($event: any) {
    this.refreshTickets($event);
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }
  
  private refreshTickets($event: any | undefined) {
    this.loading = true;

    this.ticketService.getTicketList().subscribe((response: Ticket[]) => {
      this.loading = false;
      this.tickets = response.sort((a, b) => {
        if (a.event?.venue?.startDate > b.event?.venue?.startDate) {
          return -1;
        }
        if (a.event?.venue?.startDate < b.event?.venue?.startDate) {
          return 1
        }
        return 0;
      });
      if ($event) {
        $event.target.complete();
      }
    });
  }

}
