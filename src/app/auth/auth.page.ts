import { Component, OnInit } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.OneSignalInit();
  }

  async OneSignalInit() {
    OneSignal.Debug.setLogLevel(6);
    OneSignal.initialize(environment.oneSignal_api);
    OneSignal.Notifications.requestPermission(true);
    OneSignal.Notifications.addEventListener('click', (event: any) => {
      console.log('Onesignal: notificacion clicked:', event);
      
    });
  }

}
