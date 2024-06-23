import { Component, OnInit,HostListener, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { animationFrames } from 'rxjs';
import { animation_list } from '../animations';

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
    {img: "../assets/img/lis_top/image_carousel/drumohr_main_key_img.svg",link:'https://drumohr.lis-giappone.com/'},
    {img: "../assets/img/lis_top/image_carousel/guyrover_main_key_img.svg",link:'https://guyrover.lis-giappone.com/'},
    {img: "../assets/img/lis_top/image_carousel/ernest_main_key_img.svg",link:'https://lis-giappone.com/#/brands/ernesto'},
    {img: "../assets/img/lis_top/image_carousel/gfb_main_key_img.svg",link:'https://lis-giappone.com/#/brands/gfb'},
    {img: "../assets/img/lis_top/image_carousel/devore_main_key_img.svg",link:'https://lis-giappone.com/#/brands/devore'},
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
