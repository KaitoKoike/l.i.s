import { Component, OnInit } from '@angular/core';
import { NewsTextsProvider } from 'src/assets/news/news_text';

@Component({
  selector: 'app-news202403',
  templateUrl: './news202403.component.html',
  styleUrls: ['./news202403.component.css']
})
export class News202403Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.get_keys_news(this.news_conf);
    this.get_news_conds(this.news_conf);
  }
  news_id = 'news20240316';
  news_sup_title = ''
  news_cond_m = "03";
  news_cond_y = '2024'
  news_keys:any[] = [];
  news_list:any[] = [];
  news_conf = NewsTextsProvider.value.news202403;
  news_inf = NewsTextsProvider.info['2024-03-16'];
  
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