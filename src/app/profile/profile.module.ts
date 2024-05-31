import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ProfileComponent } from './profile.component';
import { MaskitoModule } from '@maskito/angular';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    MaskitoModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfilePageModule { }
