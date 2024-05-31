import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrentUser } from './core/model/current-user';
import { NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CoreService } from './core/service/core.service';
import { IonModal, ToastController } from '@ionic/angular';
import { filter } from 'rxjs';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(IonModal)
  modal!: IonModal;

  password!: string;
  passwordConfirmation!: string;
  userConfigured: boolean = true;
  status: any;

  constructor(private coreService: CoreService, private cookieService: CookieService, private toastController: ToastController, private router: Router, private $gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.$gaService.pageView(event.urlAfterRedirects)
    });

    this.coreService.configured().subscribe((user: CurrentUser) => {

      const dismissPassword = this.cookieService.get('request-password');

      if (dismissPassword === '') {
        this.userConfigured = user.configured;
        if (!this.userConfigured) {
          this.modal.present();
        }
      }

      if (user.loggedIn) {
        //this.router.navigate(['/home']);
      }
    });
  }

  createPassword(): void {

    this.coreService.createPassword(this.password).subscribe(() => {
      this.presentToast('bottom', 'Contraseña creada');
      this.userConfigured = true;
      this.modal.dismiss();
    }, () => {
      this.presentToast('bottom', 'Ha ocurrido un error');
    });
  }

  dismissForever(): void {

    this.modal.dismiss();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
