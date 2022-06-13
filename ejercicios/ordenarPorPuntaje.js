function orderUsersByScore(users) {

    users = [ { name: 'Luis', email: 'luis@gmail.com', score: 100, }, 
    { name: 'Andrea', email: 'andrea@gmail.com', score: 30 }, 
    { name: 'María', email: 'maria@academlo.com', score: 50 } ]

    return users.sort(function( a, b ) { return a.score -b.score })
    
    
}
console.log(orderUsersByScore())

/* OTRA FORMA DE RESOLVERLO

function orderUsersByScore(users) {
    return users.sort(function (user, user2)  {return user.score - user2.score});
}
*/