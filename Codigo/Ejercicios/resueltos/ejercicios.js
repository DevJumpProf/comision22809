//funcioN
//pedimos los datos a la persona.(nombre - edad)
// indicar si la pérsona es mayor de 18 puede pasar
// si la persona llego antes de las 2 no paga entrada
// si la persona llego despues de las 2 paga en pesos la suma de las letras de su nombre + su edad

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Batman";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 85;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



const devolverString = str=> document.write(str) 
devolverString("Hola Codo a Codo" + "</br>")


const suma = (x, y) => {
  document.write( (x+ y) + "</br>") 
}
suma(10, 20)

const resta = (x, y)=> {
  document.write( (x - y) + "</br>") 
}
resta(100, 80)

const multiplica = (x, y) => {
  document.write( (x * y )+ "</br>") 
}
multiplica(10,50)

const divide = (x, y) => {
  document.write(( x / y) + "</br>") 
}
divide(100, 50)

const sonIguales= (x, y)=> {
  document.write(( x === y) + "</br>") 
}
sonIguales(20,20) 

/* const sonIguales= (x, y)=> {
if (x===y) {
  document.write (true)
} else {
  document.write (false)
}
}
sonIguales(30,20)  */

const tienenMismaLongitud = (str1, str2) =>{
  document.write((str1.length===str2.length) + "</br>")
}
tienenMismaLongitud("Pepe", "Pepo")

const menosQueNoventa = num =>
document.write ((num<90)+ "</br>")
  menosQueNoventa(180)


  const mayorQueCincuenta = num =>
document.write ((num>50)+ "</br>")
mayorQueCincuenta(180)


const obtenerResto = (x, y) => {document.write ((x%y)+ "</br>")};obtenerResto(21,5)

const esPar = num=>document.write((num%2===0)+ "</br>");esPar(36)

const esImpar= num=> 
/*   document.write((num%2===1)+ "</br>") */
    document.write((num%2!==0)+ "</br>")
  esImpar(7)  


const elevarAlCuadrado = num=> 
document.write(Math.pow(num,2)+ "</br>")
elevarAlCuadrado(8)

const elevarAlCubo= num =>
  document.write(Math.pow(num,3)+ "</br>")
elevarAlCubo(3)

const elevar = (num, exponent)=> {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  document.write(Math.pow(num,exponent)+ "</br>")
}
elevar(2,5)

const redondearNumero=num =>
document.write(Math.round(num)+ "</br>")
redondearNumero(6.3)

const redondearHaciaArriba= num =>
  document.write(Math.ceil(num)+ "</br>")
redondearHaciaArriba(6.3)

const  numeroRandom =()=> 
document.write(Math.random(0,1)+ "</br>")

numeroRandom()


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:

}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

}

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí


}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí


}
