/*
Encuentra la edad que se repite más veces.
Este ejercicio consiste en encontrar la edad que más se repite en un arreglo de estudiantes.

Ejemplos
Recibimos los siguientes datos:
students = [ { name: 'Georg', age: 23, }, { name: 'Andrea', age: 23, }, { name: 'Daniela', age: 25, }, { name: 'José', age: 27, } ];
La edad que se repite más veces es 23
*/

function findRepeatedAge(students) {

    students = [ { name: 'Georg', age: 23, }, 
    { name: 'Andrea', age: 23, }, { name: 'Daniela', age: 25, }, 
    { name: 'José', age: 27, } ];

    let contadorEdades = {}
    
    for( i = 0; i < students.length; i++ ){
        let actualEdad = students[i].age
        console.log(actualEdad)
            
        if( contadorEdades[actualEdad] !== undefined ) {
            contadorEdades[ actualEdad ] = contadorEdades[ actualEdad ] + 1
        }else{
            contadorEdades[ actualEdad ] = 1
        }   
    }

    let cantMaxima = 0
    let edadMasRepetida = null

    for( const propiedad in contadorEdades ){
        if( cantMaxima < contadorEdades[propiedad] ){
            cantMaxima = contadorEdades[propiedad]
            edadMasRepetida = propiedad
        }
    }return parseInt(edadMasRepetida)
}

console.log(findRepeatedAge())