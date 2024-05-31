import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  configured(): Observable<any> {

    const url = `${this.baseUrl}/users/configured`;

    return this.http.get<any>(url);
  }

  createPassword(password: string): Observable<void> {

    const url = `${this.baseUrl}/users/configured`;

    const body = {
      password: password
    }

    return this.http.post<void>(url, body);
  }


}
