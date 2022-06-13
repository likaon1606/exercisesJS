function replaceLastWord( phrase, word ) {

    let indiceUltimoEspacio = phrase.lastIndexOf( " " )
    console.log(indiceUltimoEspacio)
    let quitarUPalabra = phrase.substring( 0, indiceUltimoEspacio )//se pone "0" para iniciar desde el principio y en lastIndexOf(" ") es el ultimo espacio el que hace que se detenga el corte de la palabra   
    console.log(quitarUPalabra)
    let nuevaPalabra = quitarUPalabra.concat( " ", word )
 
    return nuevaPalabra
 
}
let resultado = replaceLastWord( "Tengo 10 años", "pesos" )
console.log( resultado )