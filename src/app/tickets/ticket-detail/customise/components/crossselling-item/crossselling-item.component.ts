import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Advertisment } from 'src/app/tickets/model/customization.interface';

@Component({
  selector: 'app-crossselling-item',
  templateUrl: './crossselling-item.component.html',
  styleUrls: ['./crossselling-item.component.scss'],
})
export class CrosssellingItemComponent implements OnInit {

  @Input() item!: Advertisment;

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
    if (this.quantity < this.item.stock) {
      this.quantity++;
      this.quantityChange.emit(1);
    }
  }

}
