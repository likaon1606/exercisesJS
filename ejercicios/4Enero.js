var num1 = 5, num2 = 5, resultado;

resultado = num1 * num2;

console.log(resultado);

//con el comando "ni" se crean archivos en la terminal
//con el comando node y la ruta del archivo .\nombre del archivo y su extensión, ejecuta el programa
//se debe utilizar console.log para llamar la variable que contiene el resultado

//Comentarios: Texto que es ignorado en el momento de la ejecución
// Comentario de una linea

/* 
Comentario
de multiples
lineas
*/

//PALABRAS RESERVADAS: Palabras o terminos que tienen un uso especifico dentro del lenguaje

//camelCase
//let nombreDeLaVariable = dato

let variableNumber = 10;
let variableNumberDecimal = 3.5;

let variableString = "Esto de una cadena de texto % . _ ";
let variableStringNumero = '100'
let variableSringConComillas = 'Mi libro favorito es: "La nausea"';

let variableBooleanVerdadera = true;
let variableBooleanFalsa = false;

console.log( variableNumber );
//REASIGNACIÓN
variableNumber = 200;
console.log( variableNumber );
variableNumber = "ESTA ES UNA REASIGNACION";
console.log( variableNumber );

console.log( variableString );

/* ; solo es necesario cuando la siguiente 
instruccion empieza con alguno de los siguientes caracteres
()
[]
{}
*/
 
//const 

const PI = 3.1416
console.log( PI )
/*
no permite REASIGNACIONES
PI = 300
*/