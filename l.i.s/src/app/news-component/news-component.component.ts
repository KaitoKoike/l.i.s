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
    {img: "../assets/img/brand_list/drumohr.png",ref:"https://www.google.com",text:"aaa",news_date:'2022-4-19'},
    {img: "../assets/img/brand_list/guy_rover.png",ref:"https://www.google.com",text:'aaaa',news_date:'2022-4-19'},

  ];
  slideConfig = {
    //slickの設定
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay":false,
    "dots":false,
    'adaptiveHeight':false,
    
  };

  _trackBy(slide:any) {
    return slide.img;
  }
}
