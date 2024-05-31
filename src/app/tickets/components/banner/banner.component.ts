import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ticket } from '../../model/ticket.interface';
import { TicketsService } from '../../service/tickets.service';
import { Observable, tap } from 'rxjs';
import { Banner } from '../../model/banner.interface';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnChanges {

  @Input() ticketId!: string;

  banner$!: Observable<Banner>;

  constructor(private ticketService: TicketsService, private $gaService: GoogleAnalyticsService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['ticketId'] && changes['ticketId'].currentValue) {

      this.banner$ = this.ticketService.getFeaturedBanner(changes['ticketId'].currentValue)
        .pipe(tap((banner: Banner) => this.onFeaturedLoad(banner)));
    }
  }

  onFeaturedLoad(banner: Banner): void {

    this.$gaService.event('main_banner_view', 'upgrade', 'Ad View', 1, undefined, {
      tokenId: this.ticketId,
      id: banner._id,
      name: banner.name,
      image: banner.image,
      price: banner.price,
      currency: 'EUR'
    });
  }

  onFeaturedClick(banner: Banner): void {

    this.$gaService.event('main_banner_click', 'upgrade', 'Ad Click', 1, undefined, {
      tokenId: this.ticketId,
      id: banner._id,
      name: banner.name,
      image: banner.image,
      price: banner.price,
      currency: 'EUR'
    });
  }

}
