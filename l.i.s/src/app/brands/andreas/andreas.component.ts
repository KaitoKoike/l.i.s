import { Component, OnInit } from '@angular/core';
import { async, Observable, observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import { CustomBreakPointsProvider } from 'src/app/custom-BREAKPOINTS';
import { fadeinAnimation,fadeInOutAnimation } from 'src/app/animations';
import { map } from 'rxjs/operators';


@Component({
  selector: '',
  templateUrl: './andreas.component.html',
  styleUrls: ['./andreas.component.css'],
  animations:[fadeinAnimation]
})
export class AndreasComponent implements OnInit {

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
