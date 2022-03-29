export class Course {
    id: number;
    courseNombre: string;
    duracion: number;
    nota: number;
    profesor: string;
    ayudantes: string[];
    fechaInicio: Date;
    fechaFin: Date;

    constructor(id: number, courseNombre: string, duracion: number, nota: number, profesor: string, ayudantes: string[], fechaInicio: Date, fechaFin: Date) {
        this.id = id;
        this.courseNombre = courseNombre;
        this.duracion = duracion;
        this.nota = nota;
        this.profesor = profesor;
        this.ayudantes = ayudantes;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;

    };




}