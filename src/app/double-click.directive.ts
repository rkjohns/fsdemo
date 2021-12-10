import { Directive, HostListener } from '@angular/core';
import * as FullStory from '@fullstory/browser';

@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective {

  constructor() { }

  @HostListener('dblclick') onDoubleClicked() {
    FullStory.event('Double Clicked Add to Cart', {})
  }

}