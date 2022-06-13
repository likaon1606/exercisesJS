//OBJETOS: Agrupar muchos datos, pero independientes entre si. Hacen referencia al mismo elemento
//Representaciones en código de objetos que existen en la vida real
//Los objetos estan señalado por las {}
//En los objetos no hay indices como en los array o arreglos

/*
let variableObjeto = {//variableObjeto es el objeto
    propiedad1 : valor1, //Es una especia de valores, son las caracteristicas del objeto, 
    propiedad2 : valor2, //se asigna el valor con los :
    propiedad3 : valor3, //se separan con , cada propiedad
    metodo : function( parametro ){//Funcion anónima
        //Instrucciones
    },
    otroMetodo( parametos ){//otro metodo de funcion anonima
        //Instrucciones
    }
}
//variableObjeto.otroMetodo() //para llamar al objeto
*/

let objetoUsuario = {//se puede poner constantes también
    nombre : "Brenda",
    apellido : "Gonzalez Quesada",
    edad : 26,
    pasatiempos: [ "Hornear", "Escuchar musica", "Leer", "Admirar michis" ],
    mascota : {
        especie : "Gato",
        color: "Calico",
        nombre : "Juno",
    },
    estaVacunada: true,
    saludar : function(){
        console.log( "Hola mundo, soY Brenda" )
    }
}


/*
//sacar el valor de una propiedad de un objeto
//SINTAXIS DEL PUNTO--> objeto.nombreDeLaPropiedad
let brendaEdad = objetoUsuario.edad
console.log(brendaEdad)
//SITAXIS DE LOS CORCHETES
// objeto["propiedad"], la propiedad debe tener "" como una cadena de texto o no podrá usarla
let usuarioNombre = objetoUsuario["nombre"]//se usa [""] cuando llamas una cadena de texto
console.log( usuarioNombre )

let primerPasatiempo=objetoUsuario.pasatiempos[ 0 ]//para acceder al elemento del arreglo pasatiempos
console.log(primerPasatiempo)         //sin los [] se accede a todos los elementos pero no se extraen      
//ENTRAR A UN OBJETO ANIDADO
let nombreMascota = objetoUsuario.mascota.nombre //para ir entrando al objeto anidado o arreglo de objetos
console.log( nombreMascota )
//SI LA PROPIEDAD ESTÁ DENTRO DE UNA VARIABLE O PARAMETRO SE DEBE USAR [""]para extraer el valor por ser cadena de texto
*/

//objetoUsuario.saludar()//solo muestra la acción saludar de la funcion

/*
//MODIFICAR PROPIEDADES DE UN OBJETO
objetoUsuario.nombre = "Nuevo valor" //solo se reasigna
objetoUsuario.estaVacunada = false //otra reasignacion
console.log(objetoUsuario) //["Hola", 2, 3] se puede reasignar, pero no es lo correcto meter datos diferentes como cadenas de texto en numeros
*/

//AGREGAR NUEVAS PROPIEDADES
// objeto.nuevaPropiedad = valorInicial
//Las nuevas propiedades se agregan al final
//dentro de los objetos estan guardados con ayuda de las propiedades
//objetoUsuario.bandaFavorita = "Iron Maiden"
//console.log( objetoUsuario )

//ELIMINAR PROPIEDADES DEL OBJETO: sin eliminar el objeto entero
// delete objeto.propiedadAEliminar

//delete objetoUsuario.nombre // se elimina la propiedad nombre
//console.log(objetoUsuario)

    /*
    objetoUsuario = {//marcaria error porque const no permite reasignacion
        nombre : "Victor"// se puede modificar LAS PROPIEDADES NO EL OBJETO, mientras no sea una reasignacion
    }
    */
/*
let objeto1 = {
    propiedad1 : "valor1",
    propiedad2 : 100
}*/
// 2 objetos no son iguales aunque sus propiedades se llamen igual
/*let objeto2 = {
    propiedad1 : "valor1",
    propiedad2 : 100
}*/

//let objeto2 = objeto1 // true porque es la referencia de una variable con 2 nombres en una caja que va a caber
                    //lo estoy comparando con sigo mismo
//console.log( objeto1 === objeto2 )
//objeto1.propiedad1 = 0// se modifica en ambos porque estamos manipulando al mismo objeto
//console.log(objeto2)

//ARREGLO DE OBJETOS
//Los elementos se extraen como cualquier arreglo
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

//Crea un array de nombre email y almacena todos los correos del arreglo users

let emails = []//primero necesito un arreglo vacío para meter los email, 
/*                //lo mismo aplica para un contador que inicie en cero
let email1 = users[0].email
console.log(email1)
emails.push( email )//empujo el email en el arreglo
let email2 = users[0].email
*///LO IDEAL ES USAR UN CICLO O BUCLE
//.length da el largo de elementos a utilizar o extraer
for( let i = 0; i  < users.length; i++ ){ // por convenxión se usa i pero se puede usar la letra que sea
    let email = users[i].email //el ultimo elemento de cualquier arreglo es -1
    emails.push( email )// se pone email para empujar los datos dentro

}
console.log ( emails ) 






