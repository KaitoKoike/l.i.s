import { Component, OnInit } from '@angular/core';
import { async, Observable, observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import { CustomBreakPointsProvider } from '../../custom-BREAKPOINTS';
import {fadeinAnimation, fadeInOutAnimation } from '../../animations';
import { map } from 'rxjs/operators';


@Component({
  selector: '',
  templateUrl: './smilano.component.html',
  styleUrls: ['./smilano.component.css'],
  animations:[fadeinAnimation]
})
export class SMilanoComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private breakpointObserver:BreakpointObserver){
  }

  isMobileSize$: Observable<boolean> = this.breakpointObserver
    .observe([CustomBreakPointsProvider.useValue[0].mediaQuery])
    .pipe(
      map(result=>result.matches)
    )

}
