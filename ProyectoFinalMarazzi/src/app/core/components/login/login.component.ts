
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/classes/login';
import { NotificationService } from 'src/app/services/notification.service';
import { LoadLogin, LoadLoginSuccess } from 'src/app/state/actions/login.action';
import { AppState } from 'src/app/state/app.state';
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
    private router: Router,
    private notificationService: NotificationService,
    private store: Store<AppState>
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
    this.store.dispatch(LoadLogin())
    this.authService.login(username, password)
      .subscribe((datos) => {
        if (datos.res == "OK") {
          // sessionStorage.setItem("user", username);
          // sessionStorage.setItem("guid", datos.guid);
          // sessionStorage.setItem("id", datos.dataRole.id);
          // sessionStorage.setItem("role", datos.dataRole.person.role);
          // sessionStorage.setItem("idPerson", datos.dataRole.person.id);
          let newLogin = new Login(datos.dataRole.id, username, datos.guid, datos.dataRole.person.role, datos.dataRole.person.id);
          this.store.dispatch(LoadLoginSuccess({ login: [newLogin] }));
          this.router.navigate(["/home"]);
          this.notificationService.openSnackBar("Ingresando....", "");
        } else {
          this.loginValid = false;
          this.notificationService.openSnackBar("Los datos ingresados son incorrectos", "");
        }

        this.ingresando = false;
      });
  }
}
