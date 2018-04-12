var semana=["lunes","martes","miercoles","jueves","viernes","sebado","domingo"]; //array de semana - NO TOCAR -
// |ESTO| <- "dia" es la unica variable que debe ser cambiada.
var dia = 5;Number.isInteger; dia-- //Se resta 1 para que este dentro del rango. 0=lunes|6=domingo.
i = "El dia de semana elegido es: "; // Enriquece la respuesta.
var x = undefined;
//-------------------------------------Funciones
(function week() {
    if (isNaN(dia)==false){ //si es un numero, independientemente de int o string.
        if(dia>0 && dia<=7){
            x=i+semana[dia];
        } else{ x = "ERROR: EL NUMERO ESTA FUERA DE RANGO.";}

    } else{ x ="No hay un dia (numero) definido."} //si no es un valor numerico salta este.

    return console.log(x);
})(); //<- (function(){ })(); autollamada