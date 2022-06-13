// let navegador = prompt("Introduce tu navegador", "");

// if (navegador === "Edge") {
//   alert("Tienes Edge");
// } else if (navegador === "Chrome" || "Firefox" || "Safari" || "Opera") {
//   alert("Está bien, soportamos estos navegadores también");
// } else {
//   alert("Esperamos que esta pagina se vea bien");
// }

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0)
        break;
    
    case 1:
        alert(1)
        break;
    case 2:
    case 3:
        alert('2,3');        
        break;
    default:
        alert('debe intoducir numeros del 0 al 3')  
}

