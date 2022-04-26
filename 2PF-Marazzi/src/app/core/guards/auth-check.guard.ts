import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user = sessionStorage.getItem("user");
    let guid = sessionStorage.getItem("guid");
    if (user && guid) {
      this.authService.validateLogin(user, guid).subscribe((datos) => {
        //console.log("23 - Auth-check: ", datos);
        if (datos.res == "OK") {
          return true;
        } else {
          this.router.navigate(["/login"]);
          return false;
        }
      });
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;


  }





}
