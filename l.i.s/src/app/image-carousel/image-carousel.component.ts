import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "../assets/img/lis_top/Drumor.png"},
    {img: "../assets/img/lis_top/Drumor.png"},
    {img: "../assets/img/lis_top/Drumor.png"}
  ];
  slideConfig = {
    //slickの設定
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":true,
    "dots":true,
    'adaptiveHeight':false,
    
  };

  _trackBy(slide:any) {
    return slide.img;
  }
  addSlide() {
    //this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
  

}
