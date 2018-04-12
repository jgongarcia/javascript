dia=3.23;Number.isInteger /*Obliga a que el numero sea entero, elimina eldecimal*/
/*semana=("lunes","martes","miercoles","jueves","viernes","sabado","Domingo");
console.log(semana[3]);
console.log(semana[4]);
console.log(semana[5]);*/
i="El dia de semana elegido es: ";
if (isNaN(dia)==false){ //si la var dia tiene un valor numerico entonces ejecuta el switch.
    switch(dia){
        case 1:
            console.log(i+"Lunes")
            break;
        
        case 2:
            console.log(i+"martes")
            break;

        case 3:
            console.log(i+"miercoles")
            break;
        
        case 4:
            console.log(i+"jueves")
            break;
        
        case 5:
            console.log(i+"viernes")
            break;
        
        case 6:
            console.log(i+"Sabado")
            break;
        
        case 7:
            console.log(i+"Domingo")
            break;
        //-----------------------------------------------------
        default:
            console.log("ERROR: EL NUMERO ESTA FUERA DE RANGO."); //si el valor numerico no esta dentro del rango 1-7. salta esto
    }
} else{console.log("No hay un dia (numero) definido.")} //si no es un valor numerico salta este.

console.log("FIN DE EJECUCION.");