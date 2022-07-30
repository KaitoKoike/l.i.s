import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';

export interface aboutElement {
  key:string;
  value:string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  dataSource :any ;
  displayedColumns =['key','value'];
  constructor() { }

  ngOnInit(): void {
    this.displayedColumns= [];
    const ABOUTCOMPANY :aboutElement[] = [
      {key:'社名',value:'株式会社エル・アイ・エス'},
      {key:'本社所在地',value:'〒150-0021 東京都渋谷区恵比寿西2-17-16 代官山T・Kビル2F'},
      {key:'代表者',value:'代表取締役　坂戸 典之'},
      {key:'設立',value:'2008年1月'},
      {key:'資本金',value:'5,000,000円'},
      {key:'事業内容',value:'輸入衣料品の仲介、卸売業'},
    ]
    this.dataSource = ABOUTCOMPANY;
  }

}
