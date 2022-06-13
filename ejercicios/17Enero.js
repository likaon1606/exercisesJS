/*
for( let i = 0; i < 3; i++ ){// para el ejercicio de recorrer los arreglos un ciclo for anidado
    console.log(`Esta es la iteración no. ${i} del for externo`)
    for( j=0; j < 5; j++ ){
        console.log(j)
    }
}
*/

//METODO SORT (ORDENAMIENTO)//ordena por el valor UNICODE del caracter
//los numeros no salen ordenados por su valor UNICODE
//NECESITA UNA FUNCION DE COMPARACION PARA ORDENAR CORRECTAMENTE
//let numbersArray = [ "Zack", "Alejandra", "Viviana", "Franklin", "Brenda", "Bernardo", "alicia" ]//alicia va al último porqu en UNICODE las minusculas tienen un valor mayor
/*
let numbersArray = [ 3, 5, 100, 10, 1000, 999, 109 ]
*/
let numbersArraySorted = numbersArray.sort( function compareNumbers( a, b ) {
    return a - b;
})

console.log( numbersArraySorted )

[ { name: "Brenda", age: 26 }, { name: "Fernanda", age: 8 } ]//lo que hay que hacer es entrar
//return a.age -b.age//para restar edades, hay que entrar a la propiedad



