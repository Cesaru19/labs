

export class FriendAge {
    constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
  }

  returnAge() {
    const today = new Date();
    const birthDate = new Date(this.year, this.month - 1, this.day);
    let age = today.getFullYear() - birthDate.getFullYear();

    // Verificar si ya cumplió años este año
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    //Se agrega este console porque lo pide el test para que pase
    console.log("Successful");

    return `${this.name} is ${age} hoy!`;
  }
}

//Ejemplo de como se importaria y usaria
// import { Friend } from "./task4.js";

// const amigo1 = new FriendAge("Javiera", 1998, 9, 29);
// console.log(amigo1.returnAge()); 