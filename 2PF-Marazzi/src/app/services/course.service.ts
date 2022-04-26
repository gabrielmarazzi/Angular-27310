import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { Courses } from '../classes/courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  serviceURL = "https://perfildigital.adea.com.ar/service/test/service.ashx";

  cursos$!: Observable<Courses[]>;

  constructor(
    private http: HttpClient
  ) {
    this.cursos$ = this.obtenerDatosCursosObservable();
  }


  obtenerDatosCursosObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getCourses');

    params = params.append('IdCourse', "");
    let Respuesta = this.http.get(this.serviceURL, { params: params });


    return Respuesta;

  }

  obtenerDatosCursoObservableById(id: number): Observable<any> {

    let params = new HttpParams();
    params = params.append('method', 'getCourses');
    params = params.append('IdCourse', id.toString().trim());
    let Respuesta = this.http.get(this.serviceURL, { params: params });


    return Respuesta;

  }


  actualizarDatosCursosObservable(data: any): Observable<any> {
    //call asmx to get courses
    // console.log(data);
    let params = new HttpParams();
    params = params.append('method', 'ABMCourse');
    params = params.append('IdCurso', data.id);
    params = params.append('Camada', data.camada);
    params = params.append('Name', data.name);
    params = params.append('StartDate', data.startDate);
    params = params.append('EndDate', data.endDate);
    params = params.append('Description', data.description);
    params = params.append('Difficulty', data.difficulty);
    params = params.append('Image', data.image);
    params = params.append('Active', data.active == true ? "1" : "0");
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  enableDisableCourse(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'ABMCourse');
    params = params.append('IdCurso', data.id);
    params = params.append('Camada', data.camada);
    params = params.append('Name', data.name);
    params = params.append('StartDate', data.startDate);
    params = params.append('EndDate', data.endDate);
    params = params.append('Description', data.description);
    params = params.append('Difficulty', data.difficulty);
    params = params.append('Image', data.image);
    params = params.append('Active', data.active == true ? "1" : "0");
    let httpHeaders = new HttpHeaders();

    httpHeaders = httpHeaders.append('Content-Type', 'application/json');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  filterActiveInactiveCourses(active: boolean): Observable<any> {
    if (active) {

      return this.cursos$.pipe(map(cursos => cursos.filter(curso => curso.active == true)));
    } else {
      return this.cursos$;
    }
  }

  ABMCourse(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'ABMCourse');
    params = params.append('IdCurso', data.id);
    params = params.append('Camada', data.camada);
    params = params.append('Name', data.name);
    params = params.append('StartDate', data.startDate);
    params = params.append('EndDate', data.endDate);
    params = params.append('Description', data.description);
    params = params.append('Difficulty', data.difficulty);
    params = params.append('Image', data.image);
    params = params.append('Active', data.active == true ? "1" : "0");
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    // console.log(this.serviceURL + "?" + params.toString());
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }


  ABMPersonToCurso(id: string, idCurso: string, pTipo: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'ABMPersonToCourse');
    params = params.append('IdStudent', id);
    params = params.append('IdTeacher', "0");
    params = params.append('IdAssistant', "0");
    params = params.append('IdCourse', idCurso);
    params = params.append('ABM', pTipo);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');
    // console.log(this.serviceURL + "?" + params.toString());
    let Respuesta = this.http.get(this.serviceURL, { params: params });

    return Respuesta;

  }

}


