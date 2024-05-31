import { Component, Input, OnInit } from '@angular/core';
import { TokenDetail, TokenDetailItem } from '../../model/token-detail.interface';

@Component({
  selector: 'app-token-item',
  templateUrl: './token-item.component.html',
  styleUrls: ['./token-item.component.scss'],
})
export class TokenItemComponent implements OnInit {

  @Input() item!: TokenDetailItem;

  constructor() { }

  ngOnInit() { }

}
