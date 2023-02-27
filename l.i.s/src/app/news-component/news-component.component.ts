import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { NewsTextsProvider } from '../../assets/news/news_text';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.get_latest_3infos(this.news_inf);
    this.get_info_contents(this.news_inf);
  }

  news_inf:any = NewsTextsProvider.info;
  sorted_keys:any[] = [];
  use_keys:any[] = [];
  infos:any[] = [];

  get_latest_3infos(news_info:any){
    console.log(this.news_inf)
    for (let key in this.news_inf){
      this.sorted_keys.push(key)
    }
    this.use_keys = this.sorted_keys.sort().reverse().slice(0,3);
  }

  get_info_contents(news_inf:any){
      this.use_keys.forEach(key => {
        this.infos.push(news_inf[key]);
      });
      console.log(this.infos);
  }

  slideConfig = {
    //slickの設定
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay":false,
    'arrows':false
  };

  _trackBy(slide:any) {
    return slide.img;
  }
}
