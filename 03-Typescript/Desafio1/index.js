//cambiar a typescript
// var nombre;
// nombre = "Gabriel";
// var edad;
// edad = 30;
var nombre = "Gabriel";
var edad = 30;
//cambiar a una clase
// var PERSONAJE = {
//     nombre: nombre,
//     edad: edad
// }
var PERSONAJE = /** @class */ (function () {
    function PERSONAJE(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return PERSONAJE;
}());
var vPersonaje = new PERSONAJE("Gabriel", 25);
var vSpiderman = {
    nombre: "Peter parker",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
var PersonajeImplements = /** @class */ (function () {
    function PersonajeImplements(nombre, poderes, edad) {
        this.nombre = nombre;
        this.poderes = poderes;
        this.edad = edad;
    }
    return PersonajeImplements;
}());
var personaje = new PersonajeImplements("Peter parker", ["trepar", "fuerza", "agilidad", "telas de araña"], 25);
console.log(personaje);
