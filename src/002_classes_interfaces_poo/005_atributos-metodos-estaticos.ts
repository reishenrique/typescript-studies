/* eslint-disable no-useless-constructor */
// Atributos e métodos estáticos

export class Person {
  // Atributos estáticos
  static age = 25
  static cpf = '11122233344'

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  static teste(): void {
    console.log('Teste')
  }

  // Factory Method
  static newPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.age, Person.cpf) // Passando os atributos estáticos para a criação do objeto
  }
}

const person1 = new Person('Henrique', 'Reis', 25, '11122233340')

Person.teste() // Acessando o método estático direto da classe

// Criando um objeto de pessoa através de um método estático
const person2 = Person.newPerson('Factory', 'Method')
console.log(person2)
