/*
Suma todos los números pares en un rango
Este ejercicio consiste en sumar todos los números pares en un rango de 2 números (sin incluir a los 2 números).

Ejemplos
Recibimos los siguientes datos:
start = 20
end = 30
La suma de pares sin incluir start ni end es 100
Ya que los pares en ese rango (sin incluir start ni end) son 22, 24, 26 y 28; al realizar la suma de estos pares obtenemos 100
*/

function sumEvens(start, end) {
    
    let pares = 0
   
  for ( i = start; i < end; i++ ){
      if ( i % 2 == 0 && i > start ){
           pares = pares + i
           console.log(i);
      }  
  }return pares
}
console.log(sumEvens( 20, 30 ))