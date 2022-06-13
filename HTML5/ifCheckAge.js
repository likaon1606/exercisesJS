
// function checkAge(age=19) { // dará TRUE porque es mayor a 18

//     return  age > 18 ? true : confirm('¿Tines permiso de tus padres?');
   
     
//   }
//  console.log(checkAge());

//OTRA MANERA CON ||

 function checkAge(age=17) { // Arroja el texto porque es menor a 18

    return  age > 18 || confirm('¿Tines permiso de tus padres?');//confirm manda mensajes de confirmación en ventanas tipo modal
   
     
  }
 console.log(checkAge());
