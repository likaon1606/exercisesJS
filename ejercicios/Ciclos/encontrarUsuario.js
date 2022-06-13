function findUser(users, key, value) {
    
    users = [ { name: 'Georg', email: 'georg@academlo.com', age: 22 }, { name: 'Andrea', email: 'andrea@gmail.com', age: 30 } ]
    
    key = 'age'
    value = 22

    for( i = 0; i < users.length; i++ ){
    
     if(users[i][key] == value){
        let resultado = users.splice(i, 1)
        return arreglo = resultado[0]
        
     }
       
}
}
console.log(findUser())

//OTRA FORMA DE RESOLVERLO

/*
function findUser(users, key, value) {
    for (let i = 0; i < users.length; i++) {
        if(users[i][key] === value) 
        return users[i]
    }
}
*/