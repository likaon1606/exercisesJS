/*Crea un arreglo multiplos
Este ejercicio consiste en recibir 2 números y crear un arreglo 
con los los múltiplos del primero siempre y cuando sean menores al segundo.
*/
function populateArray(number, limit) {

    let arreglo = []
 
    for( i=2; i < 100; i++){
       let resul = number * i
       if(resul < limit){
          arreglo.push(resul)
       }
    }return arreglo
 }
console.log(populateArray(3,20))