import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "violet";
  }
    
  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.color = "blue";
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.color = "green";
  }
}
