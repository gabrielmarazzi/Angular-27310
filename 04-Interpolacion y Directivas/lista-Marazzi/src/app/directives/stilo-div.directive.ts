import { Directive, Renderer2, ElementRef } from '@angular/core';
//Se que sería mejor utilizar ngClass, pero queria probar la directiva personalizada
@Directive({
  selector: '[appStiloDiv]'
})
export class StiloDivDirective {

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    renderer.setStyle(elementRef.nativeElement, 'background-color', 'white');
    renderer.setStyle(elementRef.nativeElement, 'display', 'inline-block');

  }

}
