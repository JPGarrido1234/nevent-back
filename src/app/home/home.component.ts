import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import { Ticket } from '../tickets/model/ticket.interface';
import { Experience } from './model/experience';
import { ScrollDetail } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {

  loading: boolean = false;
  next!: Ticket;
  experiences: Experience[] = [];
  timer: string = '';
  litle_text: boolean = false;

  constructor(private homeService: HomeService) { }

  ngAfterViewInit() {
    this.refreshTickets(undefined);
  }

  handleRefresh($event: any): void {
    this.refreshTickets($event);
  }

  handleScroll(ev: CustomEvent<ScrollDetail>): void {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

  private refreshTickets($event: any) {
    this.loading = true;

    this.homeService.getNextTicket().subscribe((response: Ticket) => {
      this.loading = false;
      this.next = response;
      if ($event) {
        $event.target.complete();
      }
    });
  }

}
