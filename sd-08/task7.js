export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0; //Variable para trackear la experiencia del jugador
    this.experienceToNextLevel = 100; //Variable que sirve para saber cuando el jugador sube de nivel
    this.inventory = {}; //Objeto para almacenar los items del jugador
  }
  
  info() {
    return `${this.name} has reached Level ${this.level}!`;
  }

  levelUp() {
    this.level += 1;
  }

  gainExperience(points) {
    this.experience += points; //Se acumula la experiencia ganada por el jugador
    while (this.experience >= this.experienceToNextLevel) {
      this.experience -= this.experienceToNextLevel; //Se resta la experiencia necesaria para subir de nivel, así sale del while loop cuando el jugador sube de nivel
      this.levelUp();
    }
  }

  //Metodo para agregar un item al inventario
  addItem(item, quantity) {
  if (quantity === undefined) {
    console.log("Debes especificar la cantidad al añadir un ítem.");
  }

  if (this.inventory[item]) {
    this.inventory[item] += quantity;
  } else {
    this.inventory[item] = quantity;
  }
  console.log(`${this.name} recibió ${quantity} ${item}(s).`);
}

//Metodo para remover un item del inventario
removeItem(item, quantity) {
  if (quantity === undefined) {
    console.log("Debes especificar la cantidad al remover un ítem.");
    return;
  }

  if (this.inventory[item]) {
    this.inventory[item] -= quantity;
    if (this.inventory[item] <= 0) {
      delete this.inventory[item];
      console.log(`${item} eliminado del inventario.`);
    } else {
      console.log(`${quantity} ${item}(s) removidos.`);
    }
  } else {
    console.log(`${item} no encontrado en el inventario.`);
  }
}

//Metodo para listar los items del inventario
  listInventory() {
    let output = `Inventario de ${this.name}:\n`;
    for (const [item, qty] of Object.entries(this.inventory)) {
      output += `- ${item}: ${qty}\n`;
    }
    return output;
  }
}

//Se crea otra clase para crear los miembros de la party, que es un arreglo de jugadores. No se agrega a player porque conceptualmente seria equivocado
class Party {
  constructor() {
    this.members = [];
  }

  //Metodo para agregar un miembro a la party
  addMember(player) {
    this.members.push(player);
    return `${player.name} has joined the party!`;
  }

  //Metodo para remover un miembro de la party
  removeMember(playerName) {
    this.members = this.members.filter(p => p.name !== playerName);
    return `${playerName} has left the party.`;
  }

  //Metodo para listar los miembros de la party
  listMembers() {
    return this.members.map(p => `Party Members:\n - ${p.name} (Level ${p.level})`);
  }
}

//Ejemplo de uso inventario
const cesar = new Player("César", 4);
cesar.addItem("Posion", 2);
cesar.addItem("Espada", 1);
console.log(cesar.listInventory());
cesar.removeItem("Posion", 1);
console.log(cesar.listInventory());