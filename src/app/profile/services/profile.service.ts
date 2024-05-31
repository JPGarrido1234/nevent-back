import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentMethod } from '../model/payment-method.interface';
import { Profile } from '../model/profile.interface';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    urlBase: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getProfile(): Observable<Profile> {

        let url = `${this.urlBase}/users/profile`

        return this.http.get<Profile>(url);
    }

    getPaymentMethod(): Observable<PaymentMethod[]> {

        let url = `${this.urlBase}/users/paymentmethod`

        return this.http.get<PaymentMethod[]>(url);
    }

    updateProfile(profileForm: FormGroup): Observable<any> {

        const body = profileForm.value;

        // Change birthdate parts. Back-end just accepts yyyy-mm-dd format
        if (body.birthDate && body.birthDate !== '') {
            const birthDateParts: string[] = body.birthDate.split('/');

            body.birthDate = `${birthDateParts[2]}-${birthDateParts[1]}-${birthDateParts[0]}`;
        }

        let url = `${this.urlBase}/users/profile`

        return this.http.put<any>(url, profileForm.value);
    }

    updatePaymentMethod(paymentMethod: FormGroup): Observable<any> {

        let url = `${this.urlBase}/users/paymentmethod`

        return this.http.post<any>(url, paymentMethod.value);
    }

    removePaymentMethod(id: string): Observable<any> {
        let url = `${this.urlBase}/users/paymentmethod/${id}`

        return this.http.delete<any>(url);
    }

    createSetupIntent(): Observable<any> {

        let url = `${this.urlBase}/users/payments/setup`;

        return this.http.post(url, {});
    }

    confirmSetupIntent(setupIntentId: string, paymentMethodId: string): Observable<any> {

        let url = `${this.urlBase}/users/payments/setup/${setupIntentId}/confirm?paymentMethodId=${paymentMethodId}`;

        return this.http.get(url);
    }

    cancelSetupIntent(setupIntentId: string): Observable<any> {

        let url = `${this.urlBase}/users/payments/setup/${setupIntentId}`;

        return this.http.delete(url);
    }

}
