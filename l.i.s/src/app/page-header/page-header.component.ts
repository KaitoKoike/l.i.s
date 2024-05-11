import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  headerImage?: string;

  private imageRefs = [
    {img: "../assets/img/brand_list/gianfranco_bommezzadri_black.svg",ref:'',routerlink:'/brands/gfb'},
    {img: "../assets/img/brand_list/ernesto_black.svg",ref:'',routerlink:'/brands/ernesto'},
    {img: "../assets/img/brand_list/andreas.svg",ref:"",routerlink:'/brands/andreas'},
    {img: "../assets/img/brand_list/damico.svg",ref:'',routerlink:'/brands/damico'},
    {img: "../assets/img/brand_list/devore_white.svg",ref:'',routerlink:'/brands/devore'},
    {img: "../assets/img/brand_list/ruffo.svg",ref:'',routerlink:'/brands/ruffo'},
    {img: "../assets/img/brand_list/stefano_cau.svg",ref:'',routerlink:'/brands/stefano'},
    {img: "../assets/img/brand_list/il_macassino.svg",ref:"",routerlink:''},
    {img: "../assets/img/brand_list/ciocca.svg",ref:"",routerlink:''},
    {img: "../assets/img/brand_list/sozzi_milano.svg",ref:"",routerlink:'/brands/sozzimilano'},
    {img: "../assets/img/brand_list/rr.svg",ref:"",routerlink:"/brands/rr"}
    //{img: "",ref:""},
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // 初期化時に現在のURLに基づいて画像を設定
    this.setHeaderImage(this.router.url);
    console.log(this.router.url);

    // ルート変更を購読
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setHeaderImage(event.url);
      }
    });
  }
  setHeaderImage(url: string) {
    // URLに基づいてheaderImageを辞書から取得
    const found = this.imageRefs.find(imageRef => imageRef.routerlink === url);
    if (found) {
      this.headerImage = found.img;
    } else {
      // URLが配列にない場合のデフォルト画像
      this.headerImage = undefined;
    }
  }

}
