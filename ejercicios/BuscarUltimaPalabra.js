// todo: return total length of last word in phrase
function countLastWordLength( phrase = "Hola me llamo Erik") {
    let phrase2 = phrase.split(" ")
    return phrase2[phrase2.length  -1]


}
console.log(countLastWordLength())

function buscarPalabra(frase = "Hey estudio JavaScript") {
    
    let frase2 = frase.slice(-4)
    return frase2

}

console.log(buscarPalabra())
