import {BREAKPOINT} from '@angular/flex-layout';
import {Directive} from '@angular/core';
import {LayoutDirective} from '@angular/flex-layout';

const selector = `[fxLayout.xs.mobile]`;
const inputs = ['fxLayout.xs.mobile'];

@Directive({selector, inputs})
export class CustomLayoutDirective extends LayoutDirective {
  protected override inputs = inputs;
}


const MOBILE_BREAKPOINTS = [{
  alias: 'xs.mobile',
  suffix: 'XsMobile',
  mediaQuery: 'screen and (max-width: 768px)',
  overlapping: false,
  priority: 9999 // Needed if overriding the default print breakpoint
}];

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINT,
  useValue: MOBILE_BREAKPOINTS,
  multi: true
};