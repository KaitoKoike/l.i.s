import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  news_conf = {
    'date':'2021-04-29',
    'title':'4/30～　Drumohr オンラインショップ 40％OFF キャンペーン開催',
    'detail':`いつもドルモア オンラインショップをご利用いただきありがとうございます。<br>
    <br>
    ドルモア オンラインショップでは、上記日程より一部の商品に対して40％OFFでお買物をお楽しみいただけます。お得なこの機会をどうぞお見逃しなく。<br>
    <br>
    ■開催期間：4/30(金)～<br>
    ※ご利用における注意点<br>
    ・40%OFFキャンペーン対象品にてご購入いただいた商品のご返品は、お受けいたしかねます。`
  } 
}
