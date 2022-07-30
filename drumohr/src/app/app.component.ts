import { Component, ViewChild } from '@angular/core';
import { async, Observable, observable } from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import { CustomBreakPointsProvider } from './custom-BREAKPOINTS';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { fadeInOutAnimation } from './animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:fadeInOutAnimation
})
export class AppComponent {
  title = 'drumohr';
  isNavOpened=false;
  isToggleShow = false;

  constructor(private breakpointObserver:BreakpointObserver){
  }

  isMobileSize$: Observable<boolean> = this.breakpointObserver
    .observe([CustomBreakPointsProvider.useValue[0].mediaQuery])
    .pipe(
      map(result=>result.matches)
    )
  
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  elementItemClick(){
    if (this.sidenav.mode == 'over' && this.sidenav.opened){
      this.sidenav.close()
    }else{
      console.log(this.sidenav.opened);
    }
  }
  
}
