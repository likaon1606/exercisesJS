

let n = 10;

nextPrime:
for ( i = 2; i <= n; i++ ) { //por cada i...
    
    for ( j = 2; j < i; j++ ) { //busca un divisor...
        console.log(j);
        if ( i % j == 0 ) continue nextPrime;
        }
        alert( i ); //primo
    }
