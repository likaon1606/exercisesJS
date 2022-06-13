function enterNumber(){

    let num; 

   do {
    num = prompt("Ingrese un número mayo a 100", 0);
   } while (num <= 100 && num); // sin la condicion && el bucle no se dentendría

}
console.log(enterNumber());