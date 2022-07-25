import { Component, OnInit,HostListener, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { animationFrames } from 'rxjs';
import { animation_list } from '../animation';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
  animations:animation_list
})
export class ImageCarouselComponent implements OnInit{

    constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "../assets/img/lis_top/image_carousel/carousel_01.png"},
    {img: "../assets/img/lis_top/image_carousel/carousel_02.png"},
    {img: "../assets/img/lis_top/image_carousel/carousel_03.png"}
  ];
  slideConfig = {
    //slickの設定
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":true,
    "dots":true,
    'adaptiveHeight':false,
    'arrows':false,
    'autoplaySpeed':2000,
    'speed':1000
    
  };
  slickInit(e:any){
    console.log('make carousel.')
  }


    
  
}
