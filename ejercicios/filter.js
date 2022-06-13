//método filter() crea un nuevo array con
//todos los elementos  que cumplan la condición implementada con la función dada

/*
    Comprobar con filter, que números son mayores a 0
*/

const numbers = [ 5, 3, 10, 14, 5, 33 ];

    const condition = (element) => (element > 10);

    const newArray = numbers.filter(condition);
    console.log(newArray)

    //**OTRA FORMA**

    const newArray2 = numbers.filter((element) => ( element < 10)); //con arrow function dentro de filter
    console.log(newArray2)

    //**FUNCION TRADICIONAL**

    function condition2 (element){
        return element === 5;
    }
    const newArray3 = numbers.filter(condition2);
    console.log(newArray3)