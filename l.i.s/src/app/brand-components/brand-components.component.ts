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
    {img: "../assets/img/brand_list/drumohr.png",ref:"https://www.google.com"},
    {img: "../assets/img/brand_list/guy_rover.png",ref:"https://www.google.com"},
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
