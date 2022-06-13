let userName = prompt("¿Quién eres?", "");

function login() {
  if (userName === "Admin") {
    let pass = prompt("Ingresa la contraseña", "");

    if (pass === "The Master") {
      alert("Bienvenido");
    } else if (pass === "" || pass === null) {
      alert("Cancelado");
    } else {
      alert("Esa no es la contraseña");
    }

  } else if (userName === "" || userName === null) {
    alert("Cancelado");
  } else {
    alert("No te conozco");
  }
}
console.log(login());
// OTRA FORMA DE RESOLVERLO
// function login() {
//     if (userName === "Admin") {
//       let pass = prompt("Ingresa la contraseña", "");
  
//       if (pass === "The Master") {
//         alert("Bienvenido");
//       } else if (pass !== "The Master") {
//         alert("Incorrecto");
//       }
  
//     } else if (userName !== "Admin") {
//       alert("Incorrecto");
//     }
//   }
//   console.log(login());
