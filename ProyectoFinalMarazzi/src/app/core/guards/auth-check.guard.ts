import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedFunctions } from 'src/app/classes/sharedFunctions';
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

    //canAccess the route
    let ruta = state.url;

    if (SharedFunctions.getRole() > 2) {
      if (ruta.includes('/teachers')) {
        this.router.navigate(['/home']);
        return false;
      }
    }
    if (SharedFunctions.getRole() > 3) {
      if (ruta.includes('/teachers') || ruta.includes('/assistants') || ruta.includes('/students') || ruta.includes('/inscriptions')) {


        this.router.navigate(['/home']);
        return false;
      }
    }

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
