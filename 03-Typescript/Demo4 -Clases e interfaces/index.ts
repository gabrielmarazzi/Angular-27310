interface Curso {
    nombre: string;
    profesor: string;
    tutores?: Array<string>;

    saludar(): string;
}

// let vCurso: Curso = {
//     nombre: "Angular",
//     profesor: "Gabriel Marazzi",
//     tutores: ["Juan", "Pedro", "Luis"]
// };

class Camada implements Curso {

    nombre: string;
    profesor: string;
    tutores: string[] | undefined;
    nombreCamada: string;

    constructor(nombre: string, profesor: string, nombreCamada: string, tutores?: string[]) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.nombreCamada = nombreCamada;
        this.tutores = tutores;
    }


    saludar(): string {
        console.log("Hola");
        return "hola"
    }
}

let vCamada = new Camada("Angular", "Gabriel Marazzi", "27310");

console.log(vCamada)
