import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';
import { Persons } from '../classes/persons';
import { Students } from '../classes/students';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  estudiantes$!: Observable<Students[]>;
  persons$!: Observable<Persons[]>;



  constructor(
    private http: HttpClient,
  ) {
    this.estudiantes$ = this.obtenerDatosEstudiantesObservable();

  }

  obtenerDatosPersonasObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  obtenerDatosEstudiantesObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', "");
    params = params.append('Role', "4");
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  obtenerDatosProfesoresObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', "");
    params = params.append('Role', "2");
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  obtenerDatosAyudantesObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', "");
    params = params.append('Role', "3");
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  obtenerDatosPersonasObservableId(id: number, pIdRole: number): Observable<any> {
    //call asmx to get courses
    /*gammar*/
    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', id.toString());
    params = params.append('Role', pIdRole.toString());
    let Respuesta = this.http.get(this.serviceURL, { params: params });

    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  crearActualizarPersonaObservable(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'ABMPersons');
    params = params.append('IdPersona', data.id);
    params = params.append('Legajo', data.legajo);
    params = params.append('Name', data.name);
    params = params.append('LastName', data.lastName);
    params = params.append('Password', data.password);
    params = params.append('Email', data.email);
    params = params.append('BirthDay', data.birthDay);
    params = params.append('Role', data.role);
    params = params.append('Image', data.image);
    params = params.append('Active', data.active == true ? "1" : "0");
    params = params.append('Id', data.idP);
    // console.log(params)
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');

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
