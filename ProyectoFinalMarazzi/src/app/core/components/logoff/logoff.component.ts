
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Login } from 'src/app/classes/login';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(
    private router: Router,
    private SpinnerService: NgxSpinnerService,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    let user = Login.getUserFromStore(this.store);
    let guid = Login.getGuidFromStore(this.store);
    if (user != "" && guid != "") {
      this.authService.logout(user, guid).subscribe((datos) => {
        if (datos.res == "OK") {
          //sessionStorage.clear();
          this.router.navigate(["/login"]);
          setTimeout(() => {
            this.SpinnerService.hide();
          }, 2000);
        }
      });
    } else {
      this.SpinnerService.hide();
      this.router.navigate(["/login"]);
    }
  }

}
