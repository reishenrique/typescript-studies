/* eslint-disable no-sequences */
/* eslint-disable no-useless-constructor */
// Getters e Setters

// Maneira antiga de implementação de Getter e Setter
export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private cpf: string,
  ) {}

  // Obtendo valores através de um getter
  getCpf(): string {
    return `Modelo antigo de Getter: ${this.cpf.replace(/\D/g, '')}`
  }

  // Settando valores através de um setter
  setCpf(valor: string): string {
    this.cpf = valor
    return `Modelo antigo de Setter: ${this.cpf.replace(/\D/g, '')}`
  }
}

const person = new Person('Henrique', 'Reis', 25, '123.456.789.10')
console.log(person.getCpf())
console.log(person.setCpf('987.654.321-10'))

// Maneira atual de implementação de Getter e Setter

class Rectangle {
  private _width: number
  private _height: number

  constructor(width: number, height: number) {
    this._width = width
    this._height = height
  }

  get width(): number {
    return this._width
  }

  set width(value: number) {
    if (value <= 0) {
      console.log('A largura não pode ser menor ou igual a 0')
    }

    this._width = value
  }

  get height(): number {
    return this._height
  }

  set height(value: number) {
    if (value <= 0) {
      console.log('A altura não pode ser menor ou igual a 0 ')
    }
    this._height = value
  }

  get area(): number {
    return this._width * this._height
  }
}

const rectangle = new Rectangle(10, 5)

console.log('A area do retângulo é:', rectangle.area) // Apenas calculando a area do retângulo com os valores enviados pelo construtor

rectangle.width = 20 // Reatribuindo o valor da largura do retângulo

console.log(
  'A area do retângulo alterando o valor da largura é:',
  rectangle.area,
)
