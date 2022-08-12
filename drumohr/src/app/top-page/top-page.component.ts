import { Component, OnInit } from '@angular/core';
import {fadeinAnimation, fadeInOutAnimation } from '../animations';

@Component({
  selector: '',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
  animations:[fadeinAnimation]
})
export class TopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
