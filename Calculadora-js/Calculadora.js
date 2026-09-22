let numberOne = Number(prompt("Ingresa el primer numero"));
let numberTwo = Number(prompt("Ingresa el segundo numero"));

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero";
    }
    return a / b;
}


//Validación de si son números validos
if (!Number.isNaN(numberOne) && !Number.isNaN(numberTwo)) {
    let suma = sumar(numberOne, numberTwo);
    console.log("Resultado de la suma: " + suma);
    let resta = restar(numberOne, numberTwo);
    console.log("Resultado de la resta: " + resta);
    let multiplicacion = multiplicar(numberOne, numberTwo);
    console.log("Resultado de la multiplicación: " + multiplicacion);
    let division = dividir(numberOne, numberTwo);
    console.log("Resultado de la división: " + division);
} else {
    console.log("Ingresaste un valor no numerico");
}
