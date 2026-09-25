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

// Ejemplo de uso:
const player = new Player("César", 6);
player.gainExperience(50);   // no sube de nivel todavía
console.log(player.info()); // Muestra: "César has reached Level 6!"
player.gainExperience(60);   // acumula 110 → sube a nivel 7 y queda con 10 exp
console.log(player.info()); // Muestra: "César has reached Level 7!"