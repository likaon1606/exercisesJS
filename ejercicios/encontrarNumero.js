/*Encuentra el número que se encuentra en la mitad de un arreglo
Este ejercicio consiste en recibir un arreglo de números y devolver el número que se encuentre en medio.

Ejemplos
Ejemplo 1
Recibimos el arreglo:
[10, 34, 54, 23, 23]
El número que encuentra en medio es el 54
Ejemplo 2
Recibimos el arreglo:
[8, 4, 6, 3, 7, 20]
Los números que se encuentran en medio son [6, 3]
*/
function findMiddleNumber(array = [7,4,5,2,5,6,9]) {//hay que quitar un valor para que pase el otro if
                             //si es par pasa el ultimo if y si es numero non se ejecuta el primer if
                             //par en el numero de elementos que hay dentro del array    
   if( array.length % 2 === 1 ){   
      let division = array.length / 2 -.5
      let resul = array.slice(division)
      console.log(resul)
      let quitar = resul.splice(0)
      let entero = parseInt(quitar)//para sacarlo del array y quede así: 7
     // console.log(quitar)
     return entero
         }
   if( array.length % 2 === 0 ){
      let division1 = array.length / 2 -1
      let resul1 = array.slice(division1)
      let quitar1 = resul1.splice(0,2)
      return quitar1
   }
}         
console.log(findMiddleNumber()) 