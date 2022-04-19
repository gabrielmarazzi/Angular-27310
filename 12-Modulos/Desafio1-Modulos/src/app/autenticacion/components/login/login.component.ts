import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.formulario = fb.group({
      correo: new FormControl('', [Validators.email]),
      contrasena: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  login() {
    //console.log(this.formulario.value);
    this.loginService.login(this.formulario.value);
  }
}
