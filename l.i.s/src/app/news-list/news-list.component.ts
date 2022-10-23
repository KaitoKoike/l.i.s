import { Component, OnInit } from '@angular/core';
import { NewsTextsProvider } from '../news_text';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.get_sorted_news(this.news_confs);
    this.get_news_contents(this.news_confs);
  }
  
  news_confs:any = NewsTextsProvider.value;
  sorted_keys:any[] = [];
  use_keys:any[] = [];
  slides:any[] = [];

  get_sorted_news(news_confs:any){
    for (let key in news_confs){
      this.sorted_keys.push(key)
    }
    this.use_keys = this.sorted_keys.sort().reverse();
  }

  get_news_contents(news_confs:any){
      this.use_keys.forEach(key => {
        this.slides.push(news_confs[key]);
      });
  }
}
