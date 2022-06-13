//DIFERENCIAS

//Diferencia simple !=

    // console.log( 10 != 100 ) //10 diferente de 100
    // console.log( 20 != "20" ) //false por la coersión de datos
    // console.log( true != 1) //false porque true es booleano y en binario es 1
    //console.log( "b" != "B" ) //son diferentes por m

//Diferencia estricta !==

    /*console.log( 10 !== 100 ) //true--->son diferentes
    console.log( 20 !== "20" ) //true--->son diferentes
    console.log( true !== 1 ) //true --->no son del mismo tipo
    console.log( "brenda" !== "Brenda" )//true---> diferente por la mayúscula*/

//MAYOR QUE >

    /*console.log( 10 > 100 ) //10 mayor que 100
    console.log( -100 > -150 ) //true
    console.log( 12 > 10 ) //true
    console.log( "brenda" > 100 ) //false
    console.log( "brenda" > "BRENDA" ) //true-->es porque cada caracter tiene un valor unicode, es decir el valor númerico de cada caracter, como referencia ver codico ASCII
    */

//MENOR QUE <

   /* console.log( 5 < 10 ) //true
    console.log( -50 < -100 ) //false
    console.log( "b" < "B" ) //false
    console.log( 10 < 10 ) //false 
    */

//MAYOR O IGUAL QUE >=
    /*console.log( 10 >= 10 ) //true
    console.log( 10 >= 5 ) //true
    console.log( 10>= 100 ) //false
    */

//MENOR O IGUAL QUE <=

    /*console.log( 5 <= 5 ) //true
    console.log( 10 <= 100 ) //true
    console.log( 10 <= 5 ) //false
    console.log( "brenda" <= 10 ) //false
    */

//OPERADORES LOGICOS: Nos ayudan a operar datos de tipo booleano

//NEGACION ! : Es un operador unitario, necesita un solo dato para funcionar. Cuando se aplica, invierte el valor de verdadero a falso y viceversa

//se escribe en mayusculas para saber que son constantes
    // const DATO1 = true //verdadero V
    // const DATO2 = false //false F

    // console.log( !DATO1 ) //negamos el true, por eso arroja falso
    // console.log( !DATO2 ) // negamos el false, se vuelve true
    
//AND && : dato1 && dato2, operador binario, necesita 2 datos para funcionar. Los datos deben ser booleanos, es decir, true o false
    /*console.log( true && true ) //true
    console.log( true && false ) //false
    console.log( false && true ) //false
    console.log( false && false ) //false
    */

/*
    dato1 dato2 resultado
    true  true  true
    true  false false
    false true  false
    false false false
*/    

//OR || : operador binario, funciona con booleanos

/*
    dato1 dato2 resultado
    true  true  true
    true  false true
    false true  true
    false false false
*/

    /*console.log( true || true ) //true
    console.log( false || true ) //true
    console.log( true || false ) //true
    console.log( false || false ) //false  
    */

  /*let resultado = ( 10 < 10 ) || ( 10 === 10 ) //true
    console.log ( resultado )

    let resultado2 = ( 10 < 10 ) && ( 10 === 10 ) //false
    console.log( resultado2 )
    
    console.log( true && "gato" ) //gato. Operadores de corto circuito, todos los datos tienen un valor de verdad intrínseco en sí mismos
    //truthy o falsy, gato no es un booleano
    falsy
    -0
    "", cadena de texto vacía, el espacio sí es caracter
    -null
    undefined
    NaN
    truthy
    "0"
    "false"
    -[]
    -{}
    //AND DEVUELVE EL PRIMER falsy o en caso de que ambos sean truthy, devuelve el último
    console.log( "undefined" && "true" ) //undefined, devuelve el valor true a la derecha, porque no son booleanos y ya no tenemos un operador lógico
    console.log( "gato" && "texto" ) //texto
    console.log( "null" && "" ) //null
    console.log( "0" && NaN ) //NaN
    */

/*Averiguar si una frase contiene una palabra o no, si la contiene tu código debe de generar true, en caso contrario debe de generar false*/

    let pharse1 = "Esta es una frase de prueba"
    let word1 = "frase"

    let resultado = pharse1.indexOf( word1 ) !== -1 //devuelve true porque encontro la palabra, pues -1 es que no entontro una palabra y al comparar no es igual a -1, porque la encontró
    console.log( resultado ) //devuelve el indice donde se encuentra la palabra, en la posición 12, si es -1 significa que no lo encontró
    
    //METODO .includes()
//Propiedades: Caracteristicas de nuestros datos dato.propiedad
//length cantidad de caracteres que conforman la cadena de texto
    //console.log( pharse1.length )

//index, indice, posición: lugar que ocupa cada caracter dentro de la cadena de texto
//string[index] = caracter en la posición indicada
//indices empiezan desde cero    
    //console.log( pharse1[10] )
//METODOS: Son acciones que puedo llevar a cabo sobre cadenas de texto
//string.metodo() = valor de retorno    

/*TAREA: VER 5 METODOS DE STRING Y metodo .includes */

const nombre = "Ariel es el mejor programador"

const frase = "el"

console.log(`La palabra 'el' "${frase}" ${nombre.includes(frase) ? 'está' : 'en'} la frase`);
