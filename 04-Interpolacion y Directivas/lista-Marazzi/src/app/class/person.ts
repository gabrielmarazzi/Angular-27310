export class Person {
    personNombres: string = "";
    personApellidos: string = "";
    edad: number = 0;
    correo: string = "";

    constructor(personNombres: string, personApellidos: string, edad: number, correo: string) {
        this.personNombres = personNombres;
        this.personApellidos = personApellidos;
        this.edad = edad;
        this.correo = correo;
    }


}


