// Pilares da programação orientada a objetos.

/*
1º Abstração
a. A abstração de um objeto que representa uma pessoa só precisa das informações necessárias para o funcionamento do programa
b. Não precisa colocar todos os atributos de uma pessoa nessa classe, como cabeça, mão, dedos, pernas, etc...
*/

export class Person {
  private name: string
  private lastName: string

  constructor(name: string, lastName: string) {
    this.name = nome
    this.lastName = lastName
  }
}

/*
2º Encapsulamento
a. Visa ocultar partes internas de um objeto e exibir apenas o necessário para uso externo
b. Não precisamos saber como o sinal do controle remoto chega até a TV para realizar as funções necessárias
*/

class RemoteControl {
  // eslint-disable-next-line no-useless-constructor
  constructor(private powerStatus: boolean = false) {}

  public turOn(): void {
    this.powerStatus = true
  }

  public turnOff(): void {
    this.powerStatus = false
  }

  public getStatus(): boolean {
    return this.powerStatus
  }
}

class BankAccount {
  private balance: number

  constructor(inicialBalance: number) {
    this.balance = inicialBalance
  }

  public toDeposit(value: number): void {
    this.balance += value
  }

  public toWithdraw(value: number): void {
    if (value <= this.balance) {
      this.balance -= value
    } else {
      console.log('Saldo Insuficiente')
    }
  }

  public getBalance(): number {
    return this.balance
  }
}

const myAccount = new BankAccount(1000)
console.log(myAccount.getBalance()) // Output: 1000

myAccount.toDeposit(500)
console.log(myAccount.getBalance()) // Output: 1500

myAccount.toWithdraw(200)
console.log(myAccount.getBalance()) // Output: 1300

myAccount.toWithdraw(2000) // Output: Saldo insuficiente
console.log(myAccount.getBalance()) // Output: 1300

/**
3º - Herança
- Herança visa passar caracteristas de um objeto para outro
*/

// Quando abstract é declarado, a classe que irá extender dela deve implementar todos os métodos declarados também
abstract class Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(public name: string) {}
  abstract makeNoise(): void
}

class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está latindo`)
  }
}

class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} está miando`)
  }
}

class Vehicle {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public marca: string,
    public model: string,
  ) {}

  public speedUp(): void {
    console.log(`O ${this.marca}, modelo: ${this.model} está acelerando`)
  }

  public braking(): void {
    console.log(`${this.marca}, modelo: ${this.model}, está freando`)
  }
}

class Car extends Vehicle {
  constructor(
    marca: string,
    model: string,
    private numberOfPorts: number,
  ) {
    super(marca, model)
  }

  public openDoors(): void {
    console.log(
      `Abrindo ${this.numberOfPorts} portas do ${this.marca}, modelo: ${this.model}`,
    )
  }
}

const myCar = new Car('Toyota', 'Corolla', 4)
myCar.speedUp() // Output: O Toyota, modelo Corolla está acelerando
myCar.braking() // Output: Toyota, modelo Corolla, está freando
myCar.openDoors() // Abrindo 4 portas do Toyota, modelo: Corolla

/**
4º Polimorfismo 
- Algo que é polimorfo tem a habilidade de assumir diferente formas
*/

abstract class Forma {
  abstract calcularArea(): number
}

class Quadrado extends Forma {
  constructor(private lado: number) {
    super()
  }

  calcularArea(): number {
    return this.lado * this.lado
  }
}

class Circulo extends Forma {
  constructor(private raio: number) {
    super()
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio
  }
}

class Triangulo extends Forma {
  constructor(
    private base: number,
    private altura: number,
  ) {
    super()
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2
  }
}

// Função que utiliza o Polimorfismo
function calcularAreaTotal(formas: Forma[]): number {
  let areaTotal = 0
  formas.forEach((forma) => {
    areaTotal += forma.calcularArea()
  })

  return areaTotal
}

const quadrado = new Quadrado(5)
const circulo = new Circulo(3)
const triangulo = new Triangulo(4, 5)

const formas: Forma[] = [quadrado, circulo, triangulo]

const areaTotal = calcularAreaTotal(formas)

console.log('Área total das formas:', areaTotal)
