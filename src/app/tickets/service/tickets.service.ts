import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TicketScanned } from '../model/ticket-scanned.interface';
import { Ticket } from '../model/ticket.interface';
import { UnassignedTicket } from 'src/app/core/model/unassigned-ticket.interface';
import { GenericCount } from '../model/generic-count.interface';
import { Message } from '../model/message-interface';
import { Customization } from '../model/customization.interface';
import { CartItem } from '../model/cart-item.interface';
import { ThreeDSResponse } from '../model/threeds-response.interface';
import { Sponsor } from '../model/sponsor.interface';
import { Banner } from '../model/banner.interface';
import { TokenDetailItem } from '../model/token-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  urlBase: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTicketList(): Observable<Ticket[]> {

    let url = `${this.urlBase}/tickets`;

    return this.http.get<Ticket[]>(url);
  }

  getTicket(ticketId: string): Observable<Ticket> {

    let url = `${this.urlBase}/tickets/findById/${ticketId}`;

    return this.http.get<Ticket>(url);
  }

  isScanned(ticketId: string) {
    let url = `${this.urlBase}/tickets/${ticketId}/scanned`;

    return this.http.get<TicketScanned>(url);
  }

  getFeaturedBanner(ticketId: string): Observable<Banner> {

    let url = `${this.urlBase}/tickets/${ticketId}/featured`;

    return this.http.get<Banner>(url);
  }

  getFeaturedBanners(ticketId: string): Observable<Banner[]> {

    let url = `${this.urlBase}/tickets/${ticketId}/banners`;

    return this.http.get<Banner[]>(url);
  }

  getUnassignedTickets(): Observable<UnassignedTicket[]> {

    const url = `${this.urlBase}/purchases/unassigned`;

    return this.http.get<UnassignedTicket[]>(url);
  }

  assignTicket(ticketId: string, value: any): Observable<any> {

    const url = `${this.urlBase}/tickets/${ticketId}/assign`;

    return this.http.post(url, value);
  }

  countUnreadNotifications(tokenId: any): Observable<GenericCount> {

    const url = `${this.urlBase}/tickets/${tokenId}/messages/count`;

    return this.http.get<GenericCount>(url);
  }

  getNotifications(tokenId: any) {

    const url = `${this.urlBase}/tickets/${tokenId}/notifications`;

    return this.http.get<Message[]>(url);
  }

  markAsRead(tokenId: string, notifications: string[]): Observable<void> {

    const url = `${this.urlBase}/tickets/${tokenId}/notifications/read`;

    return this.http.post<any>(url, notifications);
  }

  markAsUnread(tokenId: string, notificationId: string): Observable<void> {

    const url = `${this.urlBase}/tickets/${tokenId}/notifications/${notificationId}/unread`;

    return this.http.post<any>(url, {});
  }

  getMessages(tokenId: any): Observable<any> {

    const url = `${this.urlBase}/tickets/${tokenId}/messages`;

    return this.http.get(url);
  }

  getCustomisation(tokenId: string): Observable<Customization> {

    const url = `${this.urlBase}/tickets/${tokenId}/customization`;

    return this.http.get<Customization>(url);
  }

  getSponsors(tokenId: string): Observable<Sponsor[]> {

    const url = `${this.urlBase}/tickets/${tokenId}/sponsors`;

    return this.http.get<Sponsor[]>(url);
  }

  upgrade(tokenId: string, paymentMethodId: string | undefined, cart: CartItem[], billingDetails?: any): Observable<ThreeDSResponse> {

    const url = `${this.urlBase}/tickets/${tokenId}/upgrade`;

    return this.http.post<ThreeDSResponse>(url, {
      paymentMethodId: paymentMethodId === 'wallet' ? undefined : paymentMethodId,
      tokenUpgrade: cart,
      billingDetails
    });
  }

  confirm(tokenId: string, paymentIntent: string): Observable<ThreeDSResponse> {

    const url = `${this.urlBase}/tickets/${tokenId}/upgrade/complete?paymentIntent=${paymentIntent}`;

    return this.http.post<ThreeDSResponse>(url, {});
  }

  getTokenUrls(ticketId: string): Observable<{ [key: string]: string }> {

    const url = `${this.urlBase}/tickets/${ticketId}/images`

    return this.http.get<{ [key: string]: string }>(url);
  }

  getTicketDetail(ticketId: string): Observable<TokenDetailItem[]> {

    const url = `${this.urlBase}/tickets/${ticketId}/detail`

    return this.http.get<TokenDetailItem[]>(url);
  }

}
