import { AfterViewInit, Component, Directive, ElementRef, OnDestroy, OnInit, ViewChild,Input, Output, EventEmitter } from '@angular/core';
import { animation_list, fadeinAnimation } from '../animations';
import { debounceTime, Observable, Subscriber, Subscription } from 'rxjs'
import { transition, trigger, useAnimation } from '@angular/animations';


@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
  animations:fadeinAnimation
})
export class TopPageComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  isIntersecting(status:boolean){
    console.log('Element #' + '' + 'is intersecting ' + status)
  }
}

@Directive({
  selector: '[fadein_element]',
  exportAs: 'intersection',
})
export class ObserveElementDirective implements OnDestroy {
  @Input() root: HTMLElement | null = null
  @Input() rootMargin = '0px 0px 0px 0px'
  @Input() threshold = 0.02
  @Input() debounceTime = 0
  @Input() isContinuous = false

  @Output() isIntersecting = new EventEmitter<boolean>()

  _isIntersecting = true
  subscription: Subscription

  constructor (private element: ElementRef) {
    this.subscription = this.createAndObserve()
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }

  createAndObserve () {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    return new Observable<boolean>(subscriber => {
      const intersectionObserver = new IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        subscriber.next(isIntersecting)

        isIntersecting &&
          !this.isContinuous &&
          intersectionObserver.disconnect()
      }, options)

      intersectionObserver.observe(this.element.nativeElement)

      return {
        unsubscribe () {
          intersectionObserver.disconnect()
        },
      }
    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe(status => {
        this.isIntersecting.emit(status)
        this._isIntersecting = status
      })
  }
}



