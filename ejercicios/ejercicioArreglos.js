//Eliminar "Hamster" y "Conejo", añadir "Ballena", "Cebra" y "Camello"

const arregloAnimales = [ "Gato", "Perro", "Hamster", "Conejo", "Jirafa" ]

let ejercicio = arregloAnimales.splice( 2, 2, "Ballena" , "Cebra", "Camello")

console.log(ejercicio)
console.log(arregloAnimales)
