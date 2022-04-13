import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Students } from '../classes/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  estudiantes$!: Observable<Students[]>;




  constructor(
    private http: HttpClient
  ) {
    this.estudiantes$ = this.obtenerDatosEstudiantesObservable();

  }

  obtenerDatosEstudiantesObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getStudents');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  obtenerDatosEstudiantesObservableById(id: number): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getStudents');
    params = params.append('IdStudent', id.toString());

    let Respuesta = this.http.get(this.serviceURL, { params: params });

    return Respuesta;
  }


}
