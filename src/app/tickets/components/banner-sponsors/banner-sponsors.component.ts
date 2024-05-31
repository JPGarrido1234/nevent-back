import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Sponsor } from '../../model/sponsor.interface';
import { TicketsService } from '../../service/tickets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banner-sponsors',
  templateUrl: './banner-sponsors.component.html',
  styleUrls: ['./banner-sponsors.component.scss'],
})
export class BannerSponsorsComponent implements OnChanges {

  sponsorList$ !: Observable<Sponsor[]>;

  @Input() ticketId!: string;

  constructor(private ticketService: TicketsService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['ticketId'] && changes['ticketId'].currentValue) {

      this.sponsorList$ = this.ticketService.getSponsors(changes['ticketId'].currentValue);
    }
  }

}
