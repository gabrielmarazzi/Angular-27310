import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  constructor(
    private http: HttpClient
  ) { }


  ABMGrades(data: any, pTipo: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'ABMGrades');
    params = params.append('IdGrade', data.id);
    params = params.append('IdCourse', data.idCourse);
    params = params.append('Nota', data.grade);
    params = params.append('Descripcion', data.description);
    params = params.append('Fecha', data.date);
    params = params.append('IdStudent', data.idStudent);
    params = params.append('ABM', pTipo);

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
