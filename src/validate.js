
/**
 * Funcion que valida que la fecha ingresada sea correcta
 * @param {*} date 
 * @param {*} callback 
 * @returns true si es correcta la fecha, false en caso contrario
 */
const isDate = (date, callback) => {
  return callback(date);
};

/**
 * Función que valida el formato de la fecha
 * @param {*} date 
 * @returns true si el formato es correcto, false en caso contrario
 */
const validateDate = (date) => {
  let regex =/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/g;
   
  if (date.match(regex)) {
    return true;
  }
  return false;
};

/**
 * Función que valida que la palabra sea correcta
 * @param {*} exit 
 * @returns true si es correcta la palabra, false en caso contrario
 */
const isExit = (exit) => {
  return exit.toLowerCase().trim() === "exit" ? true : false;
};

/**
 * Función que imprime las fechas
 * @param {*} dates 
 */
const showDates = (dates) =>{
    dates.map(d => console.log(d));
}
export { isDate, validateDate, isExit, showDates };
