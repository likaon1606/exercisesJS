const arregloAnimales = [ "Gato", "Perro", "Hamster", "Conejo", "Jirafa" ]

//array.push( NuevoElemento )

let nuevaLongitudPush = arregloAnimales.push( "Tlacuache" )//Esto es modificación, NO ES UNA REASIGNACION
console.log(arregloAnimales)
console.log(`La nueva longitud es: ${ nuevaLongitudPush }`) //para mostrar el numero de arreglos que hay en numero

//``${} se llaman template splits
//arregloAnimales = [ "Delfín", Panda ] //GENERA ERROR PORQUE NO SE PUEDE REASIGNAR A UNA CONST

//arreglo.pop() elimina el ULTIMO elemento

/*
let elementoEliminado = arregloAnimales.pop() //solo se púede eliminar un elemento a la vez
console.log(arregloAnimales)// .pop() no lleva nada dentro de los ()
console.log(elementoEliminado)

//arreglo.unshift( nuevoElemento, ... )agrega uno o mas elementos al INICIO del arreglo

let nuevaLongitudUnshift = arregloAnimales( "Zarigueya", "Panda", "Seroiente" )
console.log( arregloAnimales )
console.log( nuevaLongitudUnshift )
*/

//ELIMINAR ELEMENTOS DE ARREGLOS
//arreglo.splice( indiceInicio, cantidadDeElementosAEliminar, nuevoElemento1, nuevoElemento2... )
//Eliminar "Hamster del arreglo"
let indexHamster = arregloAnimales.indexOf( "Hamster" ) //busco la parabra primero y luego elimino a la derecha de esa palabra con "splice"
console.log( indexHamster )

let elementoEliminadoSplice = arregloAnimales.splice( indexHamster, 3 ) //ELIMINA A LA DERECHA 3 ELEMENTOS O LOS QUE QUIERA, SE DEFINE CON EL SEGUNDO PARAMETRO
console.log( arregloAnimales )
console.log( elementoEliminadoSplice )

//AGREGAR ELEMENTOS A UN ARREGLO
//es un arreglo vacío porque se eliminan 0 valores, solo se añaden y empujan los anteriores sacandolos
let retornoSpliceNuevosElementos = arregloAnimales.splice( 2, 0, "Tlacuache", "Ajolote" )
console.log( arregloAnimales )
console.log( retornoSpliceNuevosElementos )
// primer elemento indica a partir de que posicion de palabra voy a comenzar a insertar nuevos elementos, se le pone "0 para que no elimine nada"
//al final se le pasan los elementos nuevos con "", al insertar elementos se empujan los de adelante sacandolos del arreglo
