//CONDICIONAL if
/*
if( condicion ){
    //instrucciones que se ejecutan si la condición es verdadera
}else{
    //instrucciones que se ejecutan si la condicion es falsa
}

if( usuarioExiste ){
    //puede entrar a la plataforma
}else{
    //redirigimos a un formulario de resgitro
}

if(condicion1){
    //instrucciones que se ejecutan si la condicional es verdadera
}else if(condicion2){
    //instrucciones que se ejecutan en caso de que la condicion2 sea verdadera
}else if(condicion3){
    //instrucciones que se ejecutan en caso de que la condicion3 sea verdadera
    //pero las anteriores falsas   
}else{
    //instrucciones por default: en caso de que las anteriores sean falsas
}
*/
/*
if( condicion ){
    //instrucciones que se ejecutan si la condicion es verdadera
}else{
    //instrucciones que se ejecutan si la condicion es falsa
}

if( usuarioExiste ){
    //puede entrar a la plataforma
}else{
    //redirigimos a un formulario de registro
}

if( condicion1 ){
    //instrucciones que se ejecutan si la condicion1 es verdadera
}else if( condicion2 ){
    //instrucciones que se ejecutan en caso de que la condicion2 sea verdadera
    //pero la condicion1 falsa
}else if( condicion3 ){
    //instrucciones que se ejecutan en caso de que la condicion3 sea verdadera, 
    //pero las anteriores falsas
}else{
    //instrucciones por default. Se ejecuta en caso de que NINGUNA 
    //condicion previa haya sido verdadera
}
*/


let globos = [
    {
        tipo: "globo",
        color: "amarillo"
    },
    {
        tipo: "globo",
        color: "amarillo"
    },
    {
        tipo: "globo",
        color: "verde"
    },
    {
        tipo: "globo",
        color: "azul"
    },
    {
        tipo: "globo",
        color: "verde"
    },
    {
        tipo: "globo",
        color: "amarillo"
    },
    {
        tipo: "globo",
        color: "blanco"
    },
      {
        tipo: "globo",
        color: "blanco"
    },
      {
        tipo: "globo",
        color: "blanco"
    },
      {
        tipo: "globo",
        color: "blanco"
    },
      {
        tipo: "globo",
        color: "negro"
    },
]


let contadorColores = {}
/*
    contadorColares = {
        amarillo : 4,
        verde : 6,
        blanco: 1,
        nuevoColor : 1
    }
*/

for( let i = 0; i < globos.length; i++ ){
    let actualGloboColor = globos[i].color
    //console.log( actualGloboColor )
    //Evaluo el color del globo y comparo con las propiedades del contador
    //Si no existe una propiedad con el nombre de ese color, voy a obtener undefined
    //y significa que debo crear esa propiedad y darle un valor inicial
    //Si ya existe voy a obtener algo distinto de undefined y solo tengo que modifical el valor de la propiedad

    console.log(actualGloboColor,  contadorColores[actualGloboColor]  )
    if( contadorColores[actualGloboColor] !== undefined  ){//se está haciendo una comparación con el undefined
        //Existe la propiedad en el contador
        contadorColores[ actualGloboColor ] = contadorColores[actualGloboColor] + 1

    }else{
        //No existe la propiedad
        contadorColores[ actualGloboColor ] = 1
    }
}
console.log( contadorColores )

//CICLO FOR IN
let cantidadMaxima = 0
let colorMasRepetido = null //null porque no sé que valor va a tener

//saber cual es el color mas repetido, pero se necesita un contador antes de hacerlo
for( const propiedad in contadorColores ){//puede ser const o let, recorre el objeto y se pueda extraer las propiedades del objeto
    console.log(propiedad)  //for in itera en objetos
        if( cantidadMaxima < contadorColores[ propiedad ] ){
            cantidadMaxima = contadorColores[ propiedad ]
            colorMasRepetido = propiedad
        }
}
console.log( `El color que mas se repitio fue: ${colorMasRepetido} con ${cantidadMaxima} globos` )

