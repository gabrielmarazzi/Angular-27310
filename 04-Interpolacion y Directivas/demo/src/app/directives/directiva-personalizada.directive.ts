import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fondoGris]'
})
export class DirectivaPersonalizadaDirective {

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    renderer.setStyle(elementRef.nativeElement, 'background-color', '#d1d1d1');
    //LOGICA!!!!
    // renderer.listen('window', 'scroll', (event) => {
    //   console.log(event);
    // });

  }
}
