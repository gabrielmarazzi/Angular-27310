var vNumero = 1;
var vBool = true || false;
var vString = "Hola";
var vArray = [1, 2, 3, 4, 5];
var vArray2 = [1, 2, 3, 4, 5];
var vTuple = [1, "Gabriel Marazzi"];
var enumCatalogo;
(function (enumCatalogo) {
    enumCatalogo[enumCatalogo["Si"] = 1] = "Si";
    enumCatalogo[enumCatalogo["No"] = 0] = "No";
    //Se le puede colocar un valor por defecto
})(enumCatalogo || (enumCatalogo = {}));
