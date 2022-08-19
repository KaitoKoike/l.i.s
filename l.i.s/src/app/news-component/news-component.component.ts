import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-component',
  templateUrl: './news-component.component.html',
  styleUrls: ['./news-component.component.css']
})
export class NewsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    //{img: "../assets/img/news/20210429/news_top.png",ref:"https://www.google.com",text:"緊急事態宣言発令による対応に関しまして",news_date:'2022-4-19'},
    {img: "",ref:"",text:"",news_date:''},
  ];
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
