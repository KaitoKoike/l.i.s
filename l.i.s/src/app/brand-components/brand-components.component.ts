import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { animation_list } from '../animation';

@Component({
  selector: 'app-brand-components',
  templateUrl: './brand-components.component.html',
  styleUrls: ['./brand-components.component.css'],
  animations:animation_list,
})
export class BrandComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "../assets/img/brand_list/drumohr.png",ref:"http://drumohr.s3-website-ap-northeast-1.amazonaws.com"},
    {img: "../assets/img/brand_list/guy_rover.png",ref:"http://guyrover.s3-website-ap-northeast-1.amazonaws.com"},
    //{img: "",ref:""},

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
