import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginValid = true;
  ingresando: boolean = false;
  formularioLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])

  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  doLogin() {
    this.ingresando = true;
    if (this.formularioLogin.valid) {
      this.loginValid = true;
    } else {
      this.loginValid = false;
    }
    let username = this.formularioLogin.value.username;
    let password = this.formularioLogin.value.password;
    this.authService.login(username, password).subscribe((datos) => {
      if (datos.res == "OK") {
        sessionStorage.setItem("user", username);
        sessionStorage.setItem("guid", datos.guid);
        sessionStorage.setItem("id", datos.dataRole.id);
        sessionStorage.setItem("role", datos.dataRole.person.role);
        sessionStorage.setItem("idPerson", datos.dataRole.person.id);
        this.router.navigate(["/home"]);
      } else {
        this.loginValid = false;
      }

      this.ingresando = false;
    });
  }
}
