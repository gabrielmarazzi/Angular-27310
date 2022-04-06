import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEstiloPersonal]'
})
export class EstiloPersonalDirective implements OnInit {

  @Input('appEstiloPersonal') colorResaltado !: string;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {

    if (this.elemento.nativeElement.tagName == 'H1') {
      this.elemento.nativeElement.style.fontFamily = 'Arial';
      this.elemento.nativeElement.style.fontSize = '40px';
    } else {
      this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
    }
  }
}
