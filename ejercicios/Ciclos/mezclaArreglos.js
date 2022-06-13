/*
Meclando datos de 2 arreglos
Este ejercicio consiste en mezclar la información de 2 arreglos usando como identificador el correo.
*/

function mergeData(users, attendance) {

    users = [ { name: 'Georg', email: 'georg@academlo.com', }, 
    { name: 'Andrea', email: 'andrea@gmail.com', } ]
    attendance = [ { email: 'georg@academlo.com', asistencia: true }, 
    { email: 'andrea@gmail.com', asistencia: false } ]

  
   
    let start = 0;
    let newArray = [];

    while(start < users.length){
    if(users[start].email === attendance[start].email){
        newArray.push({...users[start],...attendance[start]})    
    }
        start = start+1
    }
    return (newArray)
}
console.log(mergeData())

/*
OTRA FORMA DE RESOLVERLO

for (let i = 0; i < users.length; i++) {
        for (let j = 0; j < attendance.length; j++) {
            if(users[i].email === attendance[j].email) {
                users[i].attendance = attendance[j].attendance
            }
        }
    }
    return users;
*/