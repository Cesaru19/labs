

// Type your code below this line!

function Car(marca, modelo, año, color, puertas, kilometraje, tipoMotor) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
  this.color = color;
  this.puertas = puertas;
  this.kilometraje = kilometraje;
  this.tipoMotor = tipoMotor;

  this.printCar = function() {
    console.log(
      `${this.año} ${this.marca} ${this.modelo}, ${this.color}, ${this.puertas} puertas, ${this.kilometraje} km, ${this.tipoMotor}`
    );
  };
}

const marca = process.argv[3];
const modelo = process.argv[4];
const año = parseInt(process.argv[5]);
const color = process.argv[6];
const puertas = parseInt(process.argv[7]);
const kilometraje = parseInt(process.argv[8]);
const tipoMotor = process.argv[9];

const myCar = new Car(marca, modelo, año, color, puertas, kilometraje, tipoMotor);

myCar.printCar();


// Type your code above this line!

