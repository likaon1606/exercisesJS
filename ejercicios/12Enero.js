//CONDICIONALES- La sentencia "if (...) evalua la condición en los parentésis, si el resultado es verdadero, ejecuta un bloque de codigo"
    /*
    if (...){

    }
    */
//la causula else
    
   //const year = 2022
    /*
    if (year === 2022) {
        console.log('Esto se muestra si la acción se cumple')
    }   
    else{
        console.log("esto se muestra si no se cumple")
        }     
    */
//La clausula else if. es para colocar variass condiciones
        
    /*    
    if (year < 2022) {
        console.log("por poco")
    } else if( year > 2022){
        console.log("tepasaste")
    } else {
        console.log("exacto")
    }
    */

//OPERADOR TERNARIO ?: para hacer condicionales dinamicas
    /*
    const error = ( 0 > 10 ) ? "Todo correcto":"Hay un error" //es para validar condiciones, el primer mensaje es si se cumple y el segundo si no se cumple
    console.log( error )
    */
    /* esta mal el if, corregir
   let puedePasar
    const edad = 18

    if ( edad >= 18 ) {
        puedePasar = true
    
         { //no necesita else porque solo son 2 condiciones, si fueran mas de 3 sí se pone
            puedePasar = false
            }
        }
    console.log(puedePasar)
    */
/*
    const puedePasar = ( edad >=18 ) ? "Correcto" : "Incorrecto"
    console.log(puedePasar)
*/
/*
const edad = 17

const message = ( edad < 3 ) 
? "eres un bebé" //puede dejarse en una sola línea todo el código o indentar el código como está
: ( edad < 18 ) 
? "Eres muy joven" 
: ( edad < 100 ) 
? "Eres ya un adulto" 
: "Esa edad es inusual"

console.log(message)
*/

//BUCLES O CICLOS
//WHILE (MIENTRAS..)
/*
while (condition) {
    //código--cuerpo del bucle
}
*/

//let i = 0

//CICLO WHILE
/*
while ( i < 4 ) {//mientras sea menor a 4 seguira repitiendose
    console.log( `Iteración ${i}` )// son 4 iteraciones porque inicia desde 0
    i++
}
*/

//CICLO DO WHILE
/*
do {
    console.log( `Iteración ${i}` )
    i++
} while ( i < 4 );
*/

//CICLO FOR
/*
for (let index = 0; index < array.length; index++) {//puede ser incremento o decremento
    const element = array[index];
    
}
*/
/*
    for (let i = 0; i < 4; i++) {//declaración de variable en linea
        console.log(i) // se ejecuta 4 veces
        
    }
*/

// i = 0 se declara una vez al inicio
//si la condición se cumple = cuerpo del bucle  y ejecuta el incremento
//si la condición se cumple = cuerpo del bucle  y ejecuta el incremento
//si la condición se cumple = cuerpo del bucle  y ejecuta el incremento
//si la condición se cumple = cuerpo del bucle  y ejecuta el incremento

/*
    for( contador = valorInicial; condición; modificaión del contador ){
        Instrucciones que se van a repetir
    }
Se debe separar por ;  
Contador: la mayoría empieza en 0, pero puede inicar con cualquier número, incluso negativo  
Valor incial: desde donde comenzaré a contar
Condición o Iteración: repetición de las instrucciones que tiene dentro que se va a evaluar, si es verdadera, las instrucciones se llavan a cabo, si es falso se detiene el ciclo
la condición tiene que ver con el contador ejemplo: i<10 mientras i sea menor que 10 se repetirán las instrucciones
Modificación: Nos ayuda a llevar la cuenta de cuantas veces se repetirá el ciclo
Si siempre se va a verdadero, el bucle será infinito, se puede detener con CTRL+C
*/

//mostrar los numeros del 1 al 10
for (let contador = 0; contador <= 10; contador++) {//para llegar a 10 se debe usar <=, si se pone < mostrará 9

    console.log( contador )
    
}
    /*
        contador    condicion       resultado   incremento
        0           0<=10-->True        0       0+1 = 1
        1           1<=10-->True        1       1+1 = 2
        
        11          11<=10-->False      sin resultado porque ya se pasó del 10
    */
