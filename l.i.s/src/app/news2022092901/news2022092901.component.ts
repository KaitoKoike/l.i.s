import { Component, OnInit } from '@angular/core';
import {NewsTextsProvider} from '../news_text';

@Component({
  selector: 'app-news2022092901',
  templateUrl:'./news2022092901.component.html',
  styleUrls: ['./news2022092901.component.css']
})
export class News2022092901Component implements OnInit {

  constructor() {;
    
  }

  ngOnInit(): void {
    this.get_NewsDetail(this.news_conf);
  }
  news_id = 'news2022092901';
  news_conf = NewsTextsProvider.value;
  news_content:any;
  
  get_NewsDetail(news_conf:any){
    this.news_content = news_conf[this.news_id];
  }
}
