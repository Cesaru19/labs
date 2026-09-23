// Refer to Task 7 in your Instructions to complete this task

let lines = Number(prompt("Ingresa el numero de lineas"));
let array = [];

let buzzWords = [
  "Fizz",
  "Buzz",
  "Woof",
  "Bang"
];

// Función para detectar primos impares
function esPrimoImpar(num) {
  let flag = true;
  if (num < 3 || num % 2 === 0) return false;
  for (let j = 3; j <= Math.sqrt(num); j += 2) {
    if (num % j === 0) {
      flag = false;
    }
  }
  return flag;
}

//Validación de si son números validos
if (!Number.isNaN(lines)) {
  for (let i = 1; i <= lines; i++) {
    let output = "";

    //Lo puse con if separados para simplificar la concatenación de palabras y como se ve, porque se veía más complejo hacelo como en el tsk 4
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    if (i % 7 === 0) {
      output += "Woof";
    }
    if (esPrimoImpar(i)) {
      output += "Bang";
    }
    if (output === "") {
      output = i;
    }

    array.push(output);
  }
  console.log(array);
} else {
  console.log("Ingresaste un valor no numerico");
}


