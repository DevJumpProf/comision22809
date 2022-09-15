
/* switch  */
/* 
let semaforo = Number(prompt ( "elije un color del semaforo: 1 = Rojo, 2= Amarillo, 3= Verde"))

switch (semaforo) {
    case 1:
      document.write ("no podes Pasar")
      break;
    case 2:
        document.write ("Precaucion")
      break;
    case 3:
        document.write ("Podes Avanzar")
      break;
    default:
        document.write ("Elejí 1 - 2 o 3 no me la compliques")
      break;
  }
 */
/* let nombre = prompt ("decime tu nombre")
let recomendaciones = prompt ( `Hola ${nombre} vamos a darte recomendaciones elije : Serie - Pelicula - Libro`)

switch (recomendaciones) {
    case "SERIE":
      document.write (`${nombre} Te Recomendamos House of dragon`)
      break;
    case "PELICULA":
        document.write (`${nombre} Te Recomendamos El efecto Mariposa`)
      break;
    case "LIBRO":
        document.write (`${nombre} Te Recomendamos El Solitario - Guy Des Cars`)
      break;
    default:
        document.write ("Te Recomendamos que elijas una opcion correcta")
      break;
  }
 */
  // Estudiar Metodos de string

/* 
  ## Sentencia while  */

/*  let numero= Number(prompt ( "elije un numero ")) */
/*
while (numero<10){
 numero++
 document.write(numero)
}
 */


/* ##  Sentencia do while
lo ejecuto y después pregunto */

/* do{
    numero++;
    document.write(numero + "<br>");
  
    }
    while (numero<=6)
     */

//BREAK
  /*   while (numero<1000){
        numero++;
        document.write(numero + "<br>");
        if (numero==900){
            break;
        }
    } */

/*  */
/*     ## Método Aleatorio - Math.random() */
/*   document.write(Math.round(Math.random()*45)); */

  //Ejercicio quini


 function quini6 (nombre,num1,num2,num3,num4,num5,num6){

document.write (`${nombre} tus numeros para la jugada de hoy son los siguientes ${num1} - ${num2} - ${num3} - ${num4} - ${num5} -  ${num6} `)
}

 quini6(prompt ("Decime tu Nombre") ,(Math.round(Math.random()*45)),(Math.round(Math.random()*45)),(Math.round(Math.random()*45)),(Math.round(Math.random()*45)),(Math.round(Math.random()*45)),(Math.round(Math.random()*45))) 

