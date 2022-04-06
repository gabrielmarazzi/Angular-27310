import { Course } from "./course";
import { Person } from "./person"

export class Students implements Person {


    //persona
    personNombres: string;
    personApellidos: string;
    edad: number;
    correo: string;

    //propio del estudiante
    legajo: number;
    promedio: number;
    cantidadCursos: number;

    //Cursos por estudiante

    cursos: Course[] = [];

    constructor(persona: Person, curso: Course[], legajo: number, promedio: number) {
        this.personNombres = persona.personNombres;
        this.personApellidos = persona.personApellidos;
        this.edad = persona.edad;
        this.correo = persona.correo;

        this.cursos = curso;

        this.legajo = legajo;
        this.promedio = promedio;
        this.cantidadCursos = this.cursos.length;


    }



}