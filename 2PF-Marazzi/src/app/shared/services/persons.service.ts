import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Persons } from '../../classes/persons';
import { Students } from '../../classes/students';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  estudiantes$!: Observable<Students[]>;
  persons$!: Observable<Persons[]>;



  constructor(
    private http: HttpClient
  ) {
    this.estudiantes$ = this.obtenerDatosEstudiantesObservable();

  }

  obtenerDatosPersonasObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  obtenerDatosEstudiantesObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getStudents');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  obtenerDatosPersonasObservableId(id: number): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getStudents');
    params = params.append('IdStudent', id.toString());

    let Respuesta = this.http.get(this.serviceURL, { params: params });

    return Respuesta;
  }

  crearActualizarEstudianteObservable(data: any): Observable<any> {
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
    params = params.append('Id', data.idStudent);
    //console.log(params)
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }
}
