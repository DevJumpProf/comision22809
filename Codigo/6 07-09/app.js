

/* Los operadores matemáticos */

let suma = 1 + 1 
let multiplicacion = 2 * 2
let resta = 2 - 2 
let division = 2 / 2 

/* modulo */
let modulo = 24 % 7


/* 21 % 5 = 1;
21 % 6 = 3;
21 % 7 = 0; */

/* document.write (modulo) */

/* ### Math.pow */
/* 
Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27;

/* ### Math.round , Math.floor, Math.ceil */
/*  Math` también tiene métodos que redondearán los números para nosotros. */ 

/* Math.round(6.5) = 7; */ // `.round` redondeará un número al número entero más cercano. 
/* Math.round(6.45) = 6; */// `.round` redondeará un número al número entero más cercano. 
/* Math.floor(6.999) = 6; *///`.floor` siempre redondeará un número al número entero más cercano hacia abajo.
/* Math.ceil(6.0001) = 7; */ //`.ceil` siempre se redondeará al número entero más cercano hacia arriba.  */


/* ### .length */

let nombre = "Juan Cruz"
/* document.write(nombre.length) */

// crear un programa que pida:

/*  
por prompt el nombre a la persona
por prompt la edad a la persona

salude con un alert "hola nombre tu edad es: edad"

 va a mostrar en el documento : la cantidad de letras de tu nombre sumado a tu edad da un resultado de : resultado */

/*  let nombre1 = prompt ("decime tu nombre");
 let edad = parseInt(prompt ("decime tu edad"));

 alert ( "Hola " + nombre1 + " tu edad es: " + edad)

 let resultado = nombre1.length + edad */

/*  document.write (nombre1 + " la cantidad de letras de tu nombre sumado a tu edad da un resultado de :" +  resultado) */

/* document.write (`tu nombre es ${nombre1} tu edad es ${edad} el resultado es : ${resultado}`) */

/* operadores de comparación */

let name = "Bruno"
let surname = "Madrigal"
let year = 1985
let year1 = 19
let year2 = "1985"
let boolean = true
let boolean2 = "true"


/* let comparation = year == year2  TRUE */
/* let comparation = year === year2 FALSE*/
/* let comparation = year1 >= year  */


/* AND */

let comparation = (year > year1) && ( boolean == boolean2)
                     //true            true


/* OR */
let comparation2 = (year > year1) || ( boolean === boolean2)
                        //true            false


// trabajar y resolver  and y or

// trabajar y resolver  !=   y !==


document.write(comparation2)










