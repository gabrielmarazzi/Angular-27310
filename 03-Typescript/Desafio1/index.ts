
//cambiar a typescript
// var nombre;
// nombre = "Gabriel";
// var edad;
// edad = 30;

const nombre: string = "Gabriel";
let edad: number = 30;

//cambiar a una clase

// var PERSONAJE = {
//     nombre: nombre,
//     edad: edad
// }

class PERSONAJE {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

let vPersonaje: PERSONAJE = new PERSONAJE("Gabriel", 25);
//o
//let vPersonaje = new PERSONAJE("Gabriel", 25);
//cambiar a interface

// var spiderman = {
//     nombre: "Peter parker",
//     poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
// }

interface Spiderman {
    nombre: string;
    poderes: string[];
    //o
    //podesres: Array<string>;

}

let vSpiderman: Spiderman = {
    nombre: "Peter parker",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
}

class PersonajeImplements implements Spiderman {
    nombre: string;
    poderes: string[];
    edad: number;

    constructor(nombre: string, poderes: string[], edad: number) {
        this.nombre = nombre;
        this.poderes = poderes;
        this.edad = edad;
    }
}

const personaje = new PersonajeImplements("Peter parker", ["trepar", "fuerza", "agilidad", "telas de araña"], 25);
console.log(personaje)