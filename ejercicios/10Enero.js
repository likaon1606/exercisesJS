//FUNCION: bloque de codigo que lleva a cabo una tarea especifica
// son reutilizables y pueden ser globales o locales
/*
    function nombreDeLaFuncion(parametro1, parametro2, parametro3) {
        //instrucciones para completar la tarea
        return ValorDeRetorno //El return debe ser siempre la ultima instruccion
    }

    nombreDeLaFuncion( argumento1, argumento2, argumento3 ) //se asignael valor que van a tener los parametros. Es posicional
*/
/*
function multiplicarDosNumeros( num1, num2 ) { //se pueden iniciar en =0 para que no de un error de tipo NaN o UNDEFINED
    console.log(`El valor de num1 es: ${ num1 }, el valor de num2: ${ num2 }` )//`` backtiks, ${} se llaman literales
    return num1 * num2
    
}
let resultado = multiplicarDosNumeros( 10,5 )//aquí se guardan los valores en la variable resultado
console.log(resultado)//se invoca el resultado de la funcion
console.log(multiplicarDosNumeros(7,4))//aquí no se guarda y no se puede reutilizar en otra operación

console.log( `Cadena de texto ${ resultado }` )//puedo poner variables en las literales

//Función que reemplace la primera palabra de una frase por la palabra "gato"
/*
    1. Las palabras se separan entre sí por espacios
    2. La primera palabra es la que empieza antes del primer espacio
    3. "Esta es una frase", borro la primer palabra y escribo gato "Gato es una frase"
*/

//una variable que se declara fuera de una función se considera local y se puede meter en la función

function reemplazarPalabra( frase, palabra ) {
    let indicePrimerEspacio = frase.indexOf( " " ) //le indico a indexOf que busque el primer espacio de la cadena de texto, para poder encontrar la primer palabra
    console.log( indicePrimerEspacio )    
    let fraseSinPalabra = frase.slice( indicePrimerEspacio )//estamos cortando la frase sin pa primer palabra
    console.log( fraseSinPalabra )
    let nuevaFrase = palabra.concat( fraseSinPalabra )// ahora solo concatenamos la frase cortada + la palabra que queremos reemplazar
    
    return nuevaFrase
}
    let resultado = reemplazarPalabra( "Esta es una frase cualquiera", "Gato" )//invocamos la funcion
    console.log( resultado )

    //ARRAY: ARREGLOS: Son una estructuras de datos que me permiten almacenar varios datos a la vez
    // los arreglos comienzan con []
    //puede existir arreglos sin datos en los [] hasta ilimitado y puedo guardar cualquier valor 
    //se pueden guardar otros arreglos o cualquier otra cosa
    //Es incorrecto guardar datos que no pertenecen al tipo, no genera error, pero por buenas practicas
    //                       0          1        2        3
   /* let arregloNombres = [ "Brenda", "Vicky", "Erick","Israel" ]//Es una especia de lista, colección o conjunto, esta ordenado de 0 en adelante por posición
    console.log( arregloNombres )// se accede a todos los elementos contenidos en arregloNombres

    let longitud = arregloNombres.length
    console.log(longitud)

    let primerElemento = arregloNombres[0]//para acceder o extraer a un arreglo se pasan [] y dentro la posición del elemento
    console.log(primerElemento)
    let ultimoElemento = arregloNombres[arregloNombres.length -1 ]//para acceder al ultimo elemento, funciona para cuando no conocemos cuantos elementos hay.
    console.log(ultimoElemento)
    //arreglos dentro de otro arreglo
    //                      0         1  
    let arregloMatriz = [ [ 1, 2 ], [ 2,2 ] ]
    let uno = arregloMatriz[0] // extrae el arreglo completo [1,2]
    let ultimoNumero = arregloMatriz[1][1] //extrae el arreglo 1, pero solo el primer dato dentro del arreglo [2,2]
    console.log(uno)
    console.log(ultimoNumero)*/