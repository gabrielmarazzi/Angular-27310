import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(
    private router: Router,
    private SpinnerService: NgxSpinnerService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    let user = sessionStorage.getItem("user");
    let guid = sessionStorage.getItem("guid");
    if (user && guid) {
      this.authService.logout(user, guid).subscribe((datos) => {
        if (datos.res == "OK") {
          sessionStorage.clear();
          this.router.navigate(["/login"]);
          setTimeout(() => {
            this.SpinnerService.hide();
          }, 2000);
        }
      });

    }
  }

}
