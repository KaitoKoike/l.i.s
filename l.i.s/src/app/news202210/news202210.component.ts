import { Component, OnInit } from '@angular/core';
import {NewsTextsProvider} from '../../assets/news/news_text';

@Component({
  selector: 'app-news202210',
  templateUrl: './news202210.component.html',
  styleUrls: ['./news202210.component.css']
})
export class News202210Component implements OnInit {

  constructor() {;
    
  }

  ngOnInit(): void {
    this.get_keys_news(this.news_conf);
    this.get_news_conds(this.news_conf);
  }
  news_id = 'news20221025';
  news_sup_title = '10月のメディア掲載情報'
  use_news_cond = "10";
  news_keys:any[] = [];
  news_list:any[] = [];
  news_conf = NewsTextsProvider.value.news202210;
  news_inf = NewsTextsProvider.info['2022-10-25'];
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
