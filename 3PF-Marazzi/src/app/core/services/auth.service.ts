import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';

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
    let Respuesta = this.http.get(this.serviceURL, { params: params }).pipe(catchError(this.httpMensajeError));
    return Respuesta;
  }

  logout(user: string, guid: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'doLogout');
    params = params.append('user', user);
    params = params.append('guid', guid);
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));

  }

  validateLogin(user: string, guid: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'validateLogin');
    params = params.append('user', user);
    params = params.append('guid', guid);
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  private httpMensajeError(errorResponse: HttpErrorResponse) {
    let mensajeError = new Subject<string>();

    if (errorResponse.status == 200) {
      console.warn("Metodo no encontrado");
    } else {
      if (errorResponse.error instanceof ErrorEvent) {
        console.warn("Error en el front end: " + errorResponse.error.message);
      } else {
        console.warn("Error en el back end: " + errorResponse.error.Message);
      }
    }
    return mensajeError;
  }



}
