import { APP_INITIALIZER, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';
import * as Sentry from "@sentry/angular-ivy";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WithCredentialsInterceptor } from './core/interceptor/with-credentials.interceptor';
import { MaskitoModule } from '@maskito/angular';
import { FormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaskitoModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.analytics.trackingCode),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => { },
    deps: [Sentry.TraceService],
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: WithCredentialsInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
