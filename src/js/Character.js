export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    const typeHeroes = [
      "Bowman",
      "Daemon",
      "Magician",
      "Swordsman",
      "Undead",
      "Zombie",
    ];

    if (typeof name !== "string") {
      throw new Error("Error");
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error("Error");
    }

    if (!typeHeroes.includes(type)) {
      throw new Error("Error");
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.deffence *= 1.2;
    } else {
      throw new Error("Error");
    }
    return 1;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.deffence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}