//Elimina un usuario
//Este ejercicio consiste en eliminar un usuario (usando su correo como identificador)
// de un arreglo de usuarios.
/*Ejemplos
Recibimos los siguientes datos:
arreglo = [ { name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]
email = erik@academlo.com
El arreglo que debemos retornar es
[ { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' } ]
*/
function deleteUser(users, email) {
    


users = [
    {
      email: 'Daniel@gmail.com',
      name: 'Daniel'
    },
    {
      email: 'erik@academlo.com',
      name: 'Erick'
    },
    {
      email: 'daniela@academlo.com',
      name: 'Daniela'
    },
    {
      email: 'maria@gmail.com',
      name: 'María'
    }
  ]
  let emailUsuario = 'erik@academlo.com'
  for (i = 0 ; i < users.length ; i++){
    
    return nuevoUsers = users.filter((item) => item.email !== emailUsuario)
    
   
}
}

console.log(deleteUser())

/*
OTRA FORMA DE RESOLVERLO CON if

function deleteUser(users, email) {
    for (let i = 0; i < users.length; i++) {
        if(users[i].email === email) {
            users.splice(i, 1);
        }
    }
    return users;
}
*/