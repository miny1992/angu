import { Directive, ElementRef,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectiveWithInput]'
})
export class DirectiveWithInputDirective {

  constructor(private element: ElementRef) {
  }
    
@Input() defaultColor: string;
@Input('appDirectiveWithInput') highlightColor: string;  
 
@HostListener('mouseenter') onMouseEnter() {
  this.highlight(this.highlightColor || this.defaultColor);
}
@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}
private highlight(color: string) {
  this.element.nativeElement.style.backgroundColor = color;
}

}
