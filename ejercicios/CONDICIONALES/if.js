let age = 40;

// False test
function prueba() {
  if (age <= 14 && age >= 90) {
    return "cierto";
  } else {
    return "false";
  }
}
console.log(prueba());

// False test
function prueba2() {
  if (!(age >= 14 && age <= 90)) {
    return "cierto";
  } else {
    return "false";
  }
}
// alert(prueba())
console.log(prueba2());

// True test
function prueba3() {
  if (age >= 14 && age <= 90) {
    return "cierto";
  } else {
    return "false";
  }
}
console.log(prueba3());
