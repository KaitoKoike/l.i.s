import { Component, OnInit } from '@angular/core';
import {fadeinAnimation, fadeInOutAnimation } from '../animations';
import { async, Observable, observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import { CustomBreakPointsProvider } from '../custom-BREAKPOINTS';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: '',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
  animations:[fadeinAnimation]
})
export class TopPageComponent implements OnInit {

  constructor(private breakpointObserver:BreakpointObserver){
  }
  ngOnInit(): void {
  }

  isMobileSize$: Observable<boolean> = this.breakpointObserver
    .observe([CustomBreakPointsProvider.useValue[0].mediaQuery])
    .pipe(
      map(result=>result.matches)
    )
}
