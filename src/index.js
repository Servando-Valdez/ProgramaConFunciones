import { question } from "readline-sync";
import { isDate, validateDate, isExit, showDates } from "./validate.js";

//imprimirmos un mensaje para el usuario
console.log("in this program you write dates with the format dd/mm/aaaa.\n"+
"if you exit of the program, you may write 'exit'");

//creamos una lista que va almacenar las fechas
let dates = [];

//creamos un ciclo para estar pidiendo fechas constantemente
while (true) {
    //pedimos que ingrese la fecha
  let date = question("Write a date with the format dd/mm/aaaa: ");
    //si la palabra que escribió es 'exit'
    //imprime las fechas y termina el programa
  if(isExit(date)){
    console.log("Dates:");
    showDates(dates);
    break;
  }
  //se crea una variable para mantener el valor de la fecha (true or false)
  let dateIsValid = isDate(date, validateDate);

  //se comprueba si es calido
  if (dateIsValid) {
    console.log('¡¡Valid Date!!');
    dates.push(date);//si lo es, guarda la fecha
  } else {
    //en caso contrario, manda un mensaje de error de formato
    console.log("¡¡Bad Date's Format!!");
  }
}
