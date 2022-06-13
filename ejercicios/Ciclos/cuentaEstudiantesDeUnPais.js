/*Cuenta los estudiantes de un país
Este ejercicio consiste en obtener el total de estudiantes que pertenecen a un país, para lo 
cuál recibiremos 2 arreglos, uno de estudiantes (donde cada estudiante 
tendrá el id del país al que pertenece) y uno de países.

Ejemplos
Recibimos los siguientes datos:
students = [ { name: 'Georg', email: 'georg@academlo.com', country_id: 1, }, { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2, }, { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2, } ];
countries = [ { id: 1, name: 'Mexico', }, { id: 2, name: 'Colombia', } ];
countryName = 'Colombia'
El valor que debemos retornar es 2 ya que 3 estudiantes pertenecen a Colombia
*/

function countStudents(students, countries, countryName) {
    students = [ { name: 'Georg', email: 'georg@academlo.com', country_id: 1, }, 
    { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2, }, 
    { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2, } ];

    countries = [ { id: 1, name: 'Mexico', }, { id: 2, name: 'Colombia', } ];
    countryName = 'Colombia'
    
    let contador = 0

    for( i = 0; i < students.length; i++ ){
        for( j = 0; j < countries.length; j++ ){
              
            if( students[i].country_id == countries[j].id && countryName == countries[j].name ){
                contador++
            }
        }
    }return contador
     
}

console.log(countStudents())