export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0; //Variable para trackear la experiencia del jugador
    this.experienceToNextLevel = 100; //Variable que sirve para saber cuando el jugador sube de nivel
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
    console.log("Party Members:");
    return this.members.map(p => `- ${p.name} (Level ${p.level})`);
  }
}

// Ejemplo de uso party:
const party = new Party();
const cesar = new Player("César", 4);
const andrea = new Player("Andrea", 6);

party.addMember(cesar);
party.addMember(andrea);
console.log(party.listMembers());

party.removeMember("César");
console.log(party.listMembers());