import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../service/tickets.service';
import { ScrollDetail } from '@ionic/angular';
import { Message } from '../../model/message-interface';
import { Ticket } from '../../model/ticket.interface';
import { TokenDetail, TokenDetailItem } from '../../model/token-detail.interface';

@Component({
  selector: 'app-token-info',
  templateUrl: './token-info.page.html',
  styleUrls: ['./token-info.page.scss'],
})
export class TokenInfoPage implements OnInit {

  ticketId!: string;
  items: TokenDetailItem[] = [];
  dateFormat = 'd MMM';
  litle_text: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private ticketService: TicketsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.ticketId = params.params.id;
      this.handleRefresh(undefined);
    });
  }

  handleRefresh($event: any | undefined): void {
    this.ticketService.getTicketDetail(this.ticketId).subscribe((response: TokenDetailItem[]) => {
      this.items = response || [];
      if ($event) {
        $event.target.complete();
      }
    });
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

}
