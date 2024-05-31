import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/tickets/model/ticket.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  urlBase: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNextTicket(): Observable<Ticket> {

    let url = `${this.urlBase}/tickets/next`;

    return this.http.get<Ticket>(url);
  }
}
