    let phrase2 = "Mi nueva frase"
    let word2 = "gato"
    let word3 = "nueva"
    let resultado2 = phrase2.indexOf(word2) !== -1 //false
    console.log(resultado2)

    let res3 = phrase2.lastIndexOf(word3) //lastIndexoff, devuelve la posición donde encuentra la palabra que es 3, si no la encuentra marcara -1
    console.log(res3)

//FUNCIONES: Bloques de codigo reutilizables que me permiten llevar a cabo un proceso especifico

/*
    function nombreDeLaFuncion( parametros ) {
        //instrucciones o proceso    
        //valor de retorno, el resultado que nos devolvera "return"
        return valorRetorno //es la sentencia final
    }
*/

function sumarDosNumeros( num1, num2 ) {
    let resultado = num1 + num2
    return resultado
}

 //para llamar a la funcion (se llaman parametros)

console.log( suma )//imprimimos la funcion
console.log( sumarDosNumeros( 50, 100 ) ) //no se guarda en las variables num1 y num2 el valor

