// let vCurso: Curso = {
//     nombre: "Angular",
//     profesor: "Gabriel Marazzi",
//     tutores: ["Juan", "Pedro", "Luis"]
// };
var Camada = /** @class */ (function () {
    function Camada(nombre, profesor, nombreCamada, tutores) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.nombreCamada = nombreCamada;
        this.tutores = tutores;
    }
    Camada.prototype.saludar = function () {
        console.log("Hola");
        return "hola";
    };
    return Camada;
}());
var vCamada = new Camada("Angular", "Gabriel Marazzi", "27310");
console.log(vCamada);
