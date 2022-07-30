import { Component, OnInit } from '@angular/core';
import {SHOP_LIST} from './shop_list';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  
  shop_list_data = SHOP_LIST;
  constructor() { }

  ngOnInit(): void {
    console.log(SHOP_LIST);
  };
  
}

