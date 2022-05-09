import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFormatoTitulos]'
})
export class FormatoTitulosDirective implements OnInit {

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.color = 'rgb(44, 34, 186)';
    if (this.elemento.nativeElement.tagName == 'H1') {
      this.elemento.nativeElement.style.fontSize = '1.7em';
    } else {
      if (this.elemento.nativeElement.tagName == 'H2') {
        this.elemento.nativeElement.style.fontSize = '1.5em';
      } else {
        if (this.elemento.nativeElement.tagName == 'H3') {
          this.elemento.nativeElement.style.fontSize = '1.4em';
        } else {
          if (this.elemento.nativeElement.tagName == 'H4') {
            this.elemento.nativeElement.style.fontSize = '1.3em';
          } else {
            if (this.elemento.nativeElement.tagName == 'H5') {
              this.elemento.nativeElement.style.fontSize = '1.2em';
            } else {
              if (this.elemento.nativeElement.tagName == 'H6') {
                this.elemento.nativeElement.style.fontSize = '1.1em';
              }
            }
          }
        }
      }
    }
  }

}
