import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-barra-carga',
  templateUrl: './barra-carga.component.html',
  styleUrls: ['./barra-carga.component.css']
})
export class BarraCargaComponent implements OnInit {

  @Input() texto: string = "...";
  constructor(private spinner: NgxSpinnerService) {
    this.spinner.show();
  }

  ngOnInit(): void {
  }

}
