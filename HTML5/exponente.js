// let x = prompt('Introduce un numero', '');
// let n = prompt('Introduce el exponente a multiplicar', '');

// function pow(){
//     return confirm(Math.pow( x, n ));
// }
// console.log(pow());

// OTRA MANERA DE HACERLO SIN MATH.POW

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Potencia ${n} no soportada,
      use un entero mayor a 0`);
  } else {
    alert( pow(x, n) );
  }

