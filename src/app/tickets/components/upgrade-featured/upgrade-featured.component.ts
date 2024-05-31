import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TicketsService } from '../../service/tickets.service';
import { Observable, tap } from 'rxjs';
import { Banner } from '../../model/banner.interface';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-upgrade-featured',
  templateUrl: './upgrade-featured.component.html',
  styleUrls: ['./upgrade-featured.component.scss'],
})
export class UpgradeFeaturedComponent implements OnChanges {


  @Input() ticketId!: string;

  advertisementList$ !: Observable<Banner[]>;

  constructor(private ticketService: TicketsService, private $gaService: GoogleAnalyticsService) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['ticketId'] && changes['ticketId'].currentValue) {

      this.advertisementList$ = this.ticketService.getFeaturedBanners(changes['ticketId'].currentValue)
        .pipe(tap((data: Banner[]) => this.onFeaturedLoad(data)));
    }
  }

  onViewMoreClick(): void {

    this.$gaService.event('view_more_click', 'upgrade', 'View More Click', 1, undefined, {
      tokenId: this.ticketId
    });
  }

  onFeaturedLoad(featured: Banner[]): void {

    for (let item of featured) {
      this.$gaService.event('featured_item_view', 'upgrade', 'Ad View', 1, undefined, {
        tokenId: this.ticketId,
        id: item._id,
        name: item.name,
        image: item.image,
        price: item.price,
        currency: 'EUR',
        position: featured.indexOf(item)
      });
    }
  }

  onFeaturedClick(banner: Banner, index: number): void {

    this.$gaService.event('featured_item_click', 'upgrade', 'Ad Click', 1, undefined, {
      tokenId: this.ticketId,
      id: banner._id,
      name: banner.name,
      image: banner.image,
      price: banner.price,
      currency: 'EUR',
      position: index
    });
  }

}
