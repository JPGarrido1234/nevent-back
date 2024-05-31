import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from '../../service/tickets.service';
import { Message } from '../../model/message-interface';
import { ScrollDetail, createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-token-messages',
  templateUrl: './token-messages.page.html',
  styleUrls: ['./token-messages.page.scss'],
})
export class TokenMessagesPage implements OnInit {

  ticketId!: string;
  messages: Message[] = [];
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
    this.ticketService.getNotifications(this.ticketId).subscribe((response: Message[]) => {
      this.messages = response;
      this.ticketService.markAsRead(this.ticketId, this.messages.filter((message: Message) => !message.read).map((message: Message) => message.id)).subscribe(() => { });
      if ($event) {
        $event.target.complete();
      }
    });
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

  markAsUnread(notificationId: string): void {
    this.ticketService.markAsUnread(this.ticketId, notificationId).subscribe(() => { });
  }

}
