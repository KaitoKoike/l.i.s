import { Component, OnInit } from '@angular/core';
import { NewsTextsProvider } from '../../assets/news/news_text';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.get_sorted_news(this.news_inf);
    this.get_news_contents(this.news_inf);
  }
  
  news_inf:any = NewsTextsProvider.info;
  sorted_keys:any[] = [];
  use_keys:any[] = [];
  infos:any[] = [];

  get_sorted_news(news_inf:any){
    for (let key in news_inf){
      this.sorted_keys.push(key)
    }
    this.use_keys = this.sorted_keys.sort().reverse();
  }

  get_news_contents(news_inf:any){
      this.use_keys.forEach(key => {
        this.infos.push(news_inf[key]);
      });
  }
}
