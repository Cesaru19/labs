// Refer to Task 5 in your Instructions to complete this task
let lines = Number(prompt("Ingresa el numero de lineas"));

//Validación de si son números validos
if (!Number.isNaN(lines)) {
    for (let i = 1; i <= lines; i++) {
      if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log("FizzBuzzWoof");
      } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0 && i % 7 === 0) {
        console.log("FizzWoof");
      } else if (i % 5 === 0 && i % 7 === 0) {
        console.log("BuzzWoof");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else if (i % 7 === 0) {
        console.log("Woof");
      } else {
        console.log(i);
      }
    };
} else {
    console.log("Ingresaste un valor no numerico");
}