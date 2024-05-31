import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenCardPreviewComponent } from './components/token-card-preview/token-card-preview.component';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TokenCardPreviewComponent, CardPreviewComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TokenCardPreviewComponent, CardPreviewComponent]
})
export class SharedModule { }
