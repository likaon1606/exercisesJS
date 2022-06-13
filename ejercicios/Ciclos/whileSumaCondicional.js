function sumaWhile(){
    let sum = 0;

    while (true) {
    
      let value = +prompt("Ingresa un número", '');
    
      if (!value) break; // (*) //se detiene la suma si se ingresa un caracter que no sea numero
    
      sum += value;
    
    }
    alert( 'Suma: ' + sum );
}
console.log(sumaWhile());