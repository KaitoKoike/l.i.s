import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { animation_list } from '../animations';

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
    {img: "../assets/img/brand_list/drumohr_blue.svg",ref:"https://drumohr.lis-giappone.com/"},
    {img: "../assets/img/brand_list/guy_rover.svg",ref:"https://guyrover.lis-giappone.com/"},
    {img: "../assets/img/brand_list/gianfranco_bommezzadri_black.svg",ref:'',routerlink:'/brands/gfb'},
    {img: "../assets/img/brand_list/ernesto_black.svg",ref:'',routerlink:'/brands/ernesto'},
    {img: "../assets/img/brand_list/andreas.svg",ref:"",routerlink:'/brands/andreas'},
    {img: "../assets/img/brand_list/damico.svg",ref:'',routerlink:'/brands/damico'},
    {img: "../assets/img/brand_list/devore_white.svg",ref:'',routerlink:'/brands/devore'},
    {img: "../assets/img/brand_list/ruffo.svg",ref:'',routerlink:'/brands/ruffo'},
    {img: "../assets/img/brand_list/stefano_cau.svg",ref:'',routerlink:'/brands/andreas'},
    {img: "../assets/img/brand_list/il_macassino.svg",ref:'',routerlink:'/brands/andreas'},
    {img: "../assets/img/brand_list/ciocca.svg",ref:'',routerlink:'/brands/andreas'},
    {img: "../assets/img/brand_list/sozzi_milano.svg",ref:'',routerlink:'/brands/andreas'},

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