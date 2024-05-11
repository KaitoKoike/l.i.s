import { Component, OnInit } from '@angular/core';
import {NewsTextsProvider} from '../../assets/news/news_text';


@Component({
  selector: 'app-news202304',
  templateUrl: './news202304.component.html',
  styleUrls: ['./news202304.component.css']
})
export class News202304Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.get_keys_news(this.news_conf);
    this.get_news_conds(this.news_conf);
  }
  news_id = 'news20230430';
  news_sup_title = '2022年4月のメディア掲載情報'
  news_cond_m = "04";
  news_cond_y = '2023'
  news_keys:any[] = [];
  news_list:any[] = [];
  news_conf = NewsTextsProvider.value.news202304;
  news_inf = NewsTextsProvider.info['2023-04-30'];
  news_content:any  ;
  
  get_keys_news(news_conf:any){
    for (let key in news_conf){
      const [year,month,day] = news_conf[key].date.split('.');
      if ((month == this.news_cond_m) && (year==this.news_cond_y)) {
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
