// Va mostrando los numeros impares antes de llegar a 10, uno por uno
// function numImpares(){
//     for (let i = 0; i < 10; i++) {

//         // si es verdadero, saltar el resto del cuerpo
//         if (i % 2 == 0) continue;
      
//         alert(i); // 1, luego 3, 5, 7, 9
//       }
// }
// console.log(numImpares());
//Otra manera de hacerlo
function numImpares(){
for (let i = 0; i < 10; i++) {

    if (i % 2) {
      alert( i );
    }
  
  }
}
  console.log(numImpares());

//----------------NUMEROS PARES---------------
function numPares() {
    for ( i=2; i <= 10; i++) {

        if ( i % 2 == 0 ) {
            alert( i )
        }
    }
}
console.log(numPares());