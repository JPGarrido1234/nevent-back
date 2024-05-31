import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketDetailComponent } from './ticket-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { TicketDetailRoutingModule } from './ticket-detail-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { BannerComponent } from '../components/banner/banner.component';
import { UpgradeFeaturedComponent } from '../components/upgrade-featured/upgrade-featured.component';
import { BannerSponsorsComponent } from '../components/banner-sponsors/banner-sponsors.component';
import { TokenContainerComponent } from '../components/token-container/token-container.component';

@NgModule({
  declarations: [TicketDetailComponent, BannerComponent, UpgradeFeaturedComponent, BannerSponsorsComponent, TokenContainerComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    CommonModule,
    TicketDetailRoutingModule,
    QRCodeModule
  ]
})
export class TicketDetailModule { }
