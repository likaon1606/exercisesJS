//SUMAR LAS EDADES DE LOS 3, Restricciones
//La edad siempre será la penúltima palabra de la frase.

function sumAges(firstUserPhrase, SecondUserPhrase, ThirdUserPhrase) {

    let convertirFrase1 = firstUserPhrase.split( " " )
    let edad1 = convertirFrase1[5]
    let convertirNum1 = parseInt(edad1)

    let convertirFrase2 = SecondUserPhrase.split( " " )
    let edad2 = convertirFrase2[5]
    let convertirNum2 = parseInt(edad2)

    let convertirFrase3 = ThirdUserPhrase.split( " " )
    let edad3 = convertirFrase3[5]
    let convertirNum3 = parseInt(edad3)
     
    return res = convertirNum1 + convertirNum2 + convertirNum3

}
let resultado = sumAges( "Me llamo Erick y tengo 8 años", "Me llamo Daniel y tengo 22 años", "Me llamo José y tengo 14 años" )
console.log(resultado)