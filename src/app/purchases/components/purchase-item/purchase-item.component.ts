import { Component, Input, OnInit } from '@angular/core';
import { PurchasePreview } from '../../model/purchase-preview';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.scss'],
})
export class PurchaseItemComponent implements OnInit {

  @Input() purchase!: PurchasePreview;

  constructor() { }

  ngOnInit() { }

}
