
const obtenerMayor = (x, y,z) => {
console.log (Math.max(x,y,z));
}
obtenerMayor  (40,20,45)
// x >= y ? x : y // Nikko
 
const mayoriaDeEdad = edad => {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if (edad>=18){
  console.log ("Allowed")
} else{
  console.log ("Not allowed")
}
// if ternario
edad>=18 ?  console.log ("Allowed") :  console.log ("Not allowed")
}
mayoriaDeEdad (10)


const conection = status => {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
if (status ===1){
console.log ("Online")
}
else if (status ===2){
  console.log ("Away")
}else {
  console.log ("Offline")
}
// if ternario
console.log(`${status == 1 ? "Online" : status == 2 ? "Away" : "Offline"}`)/* Nikko */
}
conection (3)

const saludo=idioma=>{
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
if ( idioma=="aleman"){
console.log("Guten Tag!")
}
else if ( idioma=="mandarin"){
  console.log("Ni Hao!")
}
else if ( idioma=="ingles"){
  console.log("Hello!")
}
else {
  console.log("Hola!")
}
}
saludo("mandarin")


const colors =color=> {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
switch (color){
  case "blue":
    console.log ("This is blue");
    break;
    case "red":
      console.log ("This is red");
      break;
      case "green":
        console.log ("This is green");4
        break;
        case "orange":
          console.log ("This is orange");
          break;
          default :
          console.log ("Color not found");
}

}
colors ("orange")

const esDiezOCinco =numero=> {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(numero ==10 || numero ===5);
}
esDiezOCinco(16)

const estaEnRango= numero => {
console.log (numero >20 && numero <50);
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}
estaEnRango (20)

const esEntero=numero=> {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
console.log (numero === Math.floor(numero))
 //Ana Alvarez
/* {console.log(Math.floor(numero)-numero==0)} */ 
//Lean Medina
/* if (numero - Math.floor(numero) == 0){
  console.log(true)
} else{
  console.log(false)
} */
}
esEntero (1)

const fizzBuzz = numero=> {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if (numero % 15  === 0){
console.log ("fizzbuzz")
}
else if (numero%3===0){
  console.log ("fizz")
}
else if  (numero%5===0){
  console.log ("buzz")
}
else {
  console.log (numero)
}

}
fizzBuzz (15)


const operadoresLogicos = (num1, num2, num3) =>{
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
if (num1 ===0 || num2===0||num3 ===0){
  console.log ("Error")
}
else if (num1<0||num2<0||num3<0){
  console.log ("Hay negativos")
}
else if (num1>num2 && num1>num3 &&num1>0){
  console.log ("Número 1 es mayor y positivo")
}
else if (num3>num1 && num3 > num2){
  console.log(++num3)
}
else {
  console.log (false)
}
}
operadoresLogicos (0, -10, 30)

const esPrimo = numero=> {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
if (numero ==0 || numero == 1){
  console.log (false);
  return
}
for (let i = 2;i<numero; i++){
  if (numero % i == 0){
    console.log (false);
    return
  }
}
console.log (true)
}
esPrimo(0)


const esVerdadero = valor=>{
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
if (valor){
  console.log("Soy verdadero")
}
else {
  console.log ("Soy Falso")
}
}

// ternario 
esVerdadero (true)

const tablaDelSeis= ()=> {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
let tabla = [];
for (let i = 1; i<=10;i++){
  tabla.push(6*i);
}
console.log (tabla)
}

tablaDelSeis()

const tieneTresDigitos= numero=>{
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
console.log (numero>=100 && numero <1000)
}
tieneTresDigitos(1000)

const  doWhile =numero=> {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
 let i = 0

 do {
  numero = numero +5;
  i++;
 }
 while (i<8);
 console.log (numero)
 }

 doWhile (5)


