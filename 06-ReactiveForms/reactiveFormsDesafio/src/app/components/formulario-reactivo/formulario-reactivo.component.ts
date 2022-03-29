import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  listaPersonas: Persona[] = [];
  formularioPersona!: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioPersona = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    });
  }

  ngOnInit(): void {
  }

  guardarPersona() {
    console.log(this.formularioPersona.value)
    let p: Persona = this.formularioPersona.value;
    this.listaPersonas.push(p);
    this.formularioPersona.reset();
  }
}
