import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  constructor(
    private http: HttpClient
  ) { }


  login(username: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'doLogin');
    params = params.append('user', username);
    params = params.append('clave', password);
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  logout(user: string, guid: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'doLogout');
    params = params.append('user', user);
    params = params.append('guid', guid);
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;

  }

  validateLogin(user: string, guid: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'validateLogin');
    params = params.append('user', user);
    params = params.append('guid', guid);
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }
}
