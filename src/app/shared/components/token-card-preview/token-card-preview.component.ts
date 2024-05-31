import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { timer } from 'rxjs';

@Component({
  selector: 'app-token-card-preview',
  templateUrl: './token-card-preview.component.html',
  styleUrls: ['./token-card-preview.component.scss'],
})
export class TokenCardPreviewComponent implements OnInit, OnChanges {

  @Input() ticket!: any;

  timer: string = '';
  showLocation: boolean = false;

  constructor(private router: Router, private $gaService: GoogleAnalyticsService) { }
  ngOnChanges(changes: SimpleChanges): void {


    if (changes['ticket'] && changes['ticket'].currentValue) {
      if (this.isHiddenLocation() === true) {
        this.showLocation = false;
        const source = timer(1000, 1000);
        const abc = source.subscribe(val => {
          const diff = this.timeDiff(new Date(this.ticket?.event?.venue?.revealLocationAt), new Date());
          this.timer = new Date(diff).toISOString().substring(11, 19);
        });
      } else {
        this.showLocation = true;
      }

    }
  }

  ngOnInit() { }

  isHiddenLocation(): boolean {

    return this.ticket?.event?.venue?.hiddenLocation &&
      this.ticket?.event?.venue.location === null &&
      this.timeDiff(new Date(this.ticket?.event?.venue?.revealLocationAt), new Date()) > 0;
  }

  timeDiff(date1: Date, date2: Date): number {
    const diff = date1.getTime() - date2.getTime();
    return diff;
  }

  open(tokenId: string): void {

    this.router.navigate(['/tickets', tokenId]);
  }


}
