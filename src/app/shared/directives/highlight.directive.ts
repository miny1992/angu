import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
      console.log(element);
   element.nativeElement.style.color = '#4fbfa8';
  }

}
