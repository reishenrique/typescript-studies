/* eslint-disable no-useless-constructor */

// Classes, métodos e atributos abstratos

export abstract class Character {
  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  characterAttack(character: Character): void {
    console.log(`${this.name} está atacando`)
    character.loseLife(this.attack)
  }

  loseLife(attackStrength: number): void {
    this.life -= attackStrength
    console.log(`${this.name} agora tem ${this.life} de vida`)
  }
}

// Subclasses precisam implementar o que foi declarado na classe abstrata que serve como 'molde'
export class Warrior extends Character {}
export class Monster extends Character {}

const warrior1 = new Warrior('Henrique', 100, 1000)
const monster1 = new Monster('Astaroth', 87, 1000)

warrior1.characterAttack(monster1)
warrior1.characterAttack(monster1)
warrior1.characterAttack(monster1)
