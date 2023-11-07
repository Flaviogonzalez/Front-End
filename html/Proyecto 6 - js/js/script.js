const producto = "no soy un producto";
const tweet = "la verdad que me tenes las bolas llenas flaco no te lo repito mas no soy del conurbano soy de la matanza y no tengo 23, tengo 32";

// metodos

// .length te indica la longitud del string contando a partir de 0

console.log (tweet.length);
console.log (producto.length);

// indexof busca la palabra que le indiques dentro de los parentesis a partir de su valor númerico dentro del string empezando por 0. si no encuentra lo que le indicas dentro de los parentesis, su valor es -1.

console.log (tweet.indexOf("verdad"));

// include busca especificamente la palabra que le indiques dentro de los parentesis y los expresa como valores booleanos, true o false

console.log (tweet.includes("tenes"));



// DATAZO: si vamos a la consola de google chrome y buscamos "window" y ponemos enter, consigo informacion de todas las funciones de javascript.


// objeto math


// window.math.random genera un numero ALEATORIO que casi nunca supera 1.
// puede ser window.math.random o simplemente math.random

window.Math.random();
Math.random();



// se puede mezclar con otras variables para generar mejores numeros.

resultado = Math.floor( Math.random() * 30);

console.log(resultado);

// math.pi genera el numero pi 3,141592. como Math.PI no es una funcion, necesito meter el valor dentro de una variable para poder utilizarlo o mostrarlo

let PI = Math.PI;

console.log(PI);

// math.round redondea el numero que se encuentre dentro del parentesis (puede ser valor numerico o una variable con un valor numerico).

let Redondeo = Math.round(PI);

console.log(Redondeo);

//math.floor redondea siempre hacia abajo ej: 2.1 o 2.7 = 3

//math.ceil redondea siempre hacia arriba ej: 2.7 o 2.1 = 3


//Math.sqrt raiz cuadrada de

// Math.abs convierte numero negativo a número positivo. (solo negativos a positivos. positivos a negativos no.)

let convertir = Math.abs(-23);

console.log(convertir);


//Math.min resalta el menor numero de una lista

//Math.max resalta el numero mas alto de una lista




// incrementos




// se incrementa en 1 con "++" o se disminuye con "--"

let aumento = 10;

--aumento;

console.log(aumento++) // la funcion aplica cuando se lee el numero, si lo pones atras del valor, lee primero el simbolo y despues el valor, de lo contrario, lee primero el valor y despues el simbolo.
console.log(aumento--)
console.log(--aumento)

// se incrementa o disminuye en un valor especifico con "+=" o "-="

aumento += 20;

console.log(aumento)

document.write(aumento)

