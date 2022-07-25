import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newsList = [
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"4/30～　Drumohr オンラインショップ 40％OFF キャンペーン開催",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
    {img: "../../assets/img/news/20210429/news_top.png",ref:"/newsExample",title:"緊急事態宣言発令による対応に関しまして",news_date:'2022.04.29'},
  ];

}
