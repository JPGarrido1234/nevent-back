import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnassignedTicket } from 'src/app/core/model/unassigned-ticket.interface';
import { environment } from 'src/environments/environment';
import { PurchaseDetail } from '../model/purchase-detail';
import { PurchasePreview } from '../model/purchase-preview';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {


  urlBase: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPurchaseList(): Observable<PurchasePreview[]> {

    let url = `${this.urlBase}/purchases`

    return this.http.get<PurchasePreview[]>(url);
  }

  getUnassignedTickets(): Observable<UnassignedTicket[]> {

    const url = `${this.urlBase}/purchases/unassigned`;

    return this.http.get<UnassignedTicket[]>(url);
  }

  getPurchaseDetails(purchaseId: string): Observable<PurchaseDetail> {

    const url = `${this.urlBase}/purchases/${purchaseId}`;

    return this.http.get<PurchaseDetail>(url);
  }

  assignTicket(purchaseId: string, ticketId: string, value: any): Observable<any> {

    const url = `${this.urlBase}/purchases/${purchaseId}/assign/${ticketId}`;

    return this.http.post(url, value);
  }

}
