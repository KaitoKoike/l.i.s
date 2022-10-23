import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { NewsTextsProvider } from '../news_text';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.get_latest_3news(this.news_confs);
    this.get_news_contents(this.news_confs);
  }

  news_confs:any = NewsTextsProvider.value;
  sorted_keys:any[] = [];
  use_keys:any[] = [];
  slides:any[] = [];

  get_latest_3news(news_confs:any){
    for (let key in news_confs){
      this.sorted_keys.push(key)
    }
    this.use_keys = this.sorted_keys.sort().reverse().slice(0,3);
  }

  get_news_contents(news_confs:any){
      this.use_keys.forEach(key => {
        this.slides.push(news_confs[key]);
      });
  }
   
  
  //slides = [
    //{img: "../assets/img/news/20210429/news_top.png",ref:"https://www.google.com",text:"緊急事態宣言発令による対応に関しまして",news_date:'2022-4-19'},
  //  {img: "",ref:"",text:"",news_date:''},
  //];

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
