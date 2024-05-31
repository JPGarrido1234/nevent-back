import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experience } from 'src/app/tickets/model/customization.interface';

@Component({
  selector: 'app-upselling-item',
  templateUrl: './upselling-item.component.html',
  styleUrls: ['./upselling-item.component.scss'],
})
export class UpsellingItemComponent implements OnInit {

  @Input() item!: Experience;
  @Input() quantity: number = 0;

  @Output() quantityChange = new EventEmitter<number>();

  showDetail: boolean = false;
  selectedItems: number = 0;
  selectedVariants: any[] = [];

  constructor() { }

  ngOnInit() { }

  reduceElement() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(-1);
    }

  }

  increaseElement() {
    if (this.quantity < this.item.available) {
      this.quantity++;
      this.quantityChange.emit(1);
    }
  }

  selectElement() {
    if (this.quantity < this.item.available) {

      if (this.quantity === 0) {
        this.quantity = 1;
        this.quantityChange.emit(1);
      } else {
        this.quantity = 0;
        this.quantityChange.emit(-1);
      }
    }
  }

}
