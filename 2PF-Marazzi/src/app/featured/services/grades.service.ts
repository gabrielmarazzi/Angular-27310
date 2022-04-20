import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return Respuesta;
  }
}
