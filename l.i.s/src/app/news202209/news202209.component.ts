import { Component, OnInit } from '@angular/core';
import {NewsTextsProvider} from '../news_text';

@Component({
  selector: 'app-news202209',
  templateUrl: './news202209.component.html',
  styleUrls: ['./news202209.component.css']
})
export class News202209Component implements OnInit {

  constructor() {;
    
  }

  ngOnInit(): void {
    this.get_keys_news(this.news_conf);
    this.get_news_conds(this.news_conf);
  }
  news_id = 'news20220921';
  news_sup_title = '9月のメディア掲載情報'
  use_news_cond = "09";
  news_keys:any[] = [];
  news_list:any[] = [];
  news_conf = NewsTextsProvider.value;
  news_content:any  ;
  
  get_keys_news(news_conf:any){
    for (let key in news_conf){
      const [year,month,day] = news_conf[key].date.split('.');
      if (month == this.use_news_cond ) {
        this.news_keys.push(key);
      }
    }
    this.news_keys = this.news_keys.sort().reverse();
  }

  get_news_conds(news_conf:any){
    this.news_keys.forEach(key => {
      this.news_list.push(news_conf[key]);
    });
    console.log(this.news_list);
  }
}
