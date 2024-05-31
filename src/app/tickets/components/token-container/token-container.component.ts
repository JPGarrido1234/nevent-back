import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ticket } from '../../model/ticket.interface';
import { TicketsService } from '../../service/tickets.service';
import { timer } from 'rxjs';
import { TicketScanned } from '../../model/ticket-scanned.interface';

@Component({
  selector: 'app-token-container',
  templateUrl: './token-container.component.html',
  styleUrls: ['./token-container.component.scss'],
})
export class TokenContainerComponent implements OnChanges {

  @Input() tokenId!: string;
  @Input() token!: Ticket;
  tokenUrls!: { [key: string]: string };
  isTokenLoading: boolean = true;
  fallbackQR: boolean = false;
  scanned: boolean = false;
  passphrase: string = '';
  isModalOpen: boolean = false;

  constructor(private ticketService: TicketsService) {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['tokenId'] && changes['tokenId'].currentValue) {

      this.loadTokenImage(); // Call to load the token image
    }
  }

  onImageLoad() {
    this.isTokenLoading = false; // Hide the spinner when the image is loaded
  }

  // TODO Cache the image locally for better user experience and less network load
  // Now everytime the user enters the ticket detail, the image is downloaded.
  loadTokenImage() {
    this.isTokenLoading = true;

    this.ticketService.getTokenUrls(this.tokenId).subscribe(urls => {
      this.fallbackQR = false;
      this.tokenUrls = urls;
      //this.isTokenLoading = false;
      // isTokenLoading will be set to false by the image's (load) event
    }, error => {
      console.error('Error fetching token URLs', error);
      this.isTokenLoading = false; // Error occurred, stop loading token
      this.fallbackQR = true; // Show fall-back QR instead of token
    });
  }

  launchTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(() => {
      this.ticketService.isScanned(this.tokenId).subscribe((response: TicketScanned) => {
        this.scanned = response.scanned;
        this.passphrase = response.passphrase;

        if (this.scanned === true) {
          abc.unsubscribe();
        }
      }, (error: any) => {
        console.error(error);
        abc.unsubscribe();
      });
    });
  }

  setOpenn(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
