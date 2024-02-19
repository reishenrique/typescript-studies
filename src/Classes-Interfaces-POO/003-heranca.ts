/* eslint-disable no-useless-constructor */
// Heranças em TypeScript

export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age
  }

  getCpf(): string {
    return this.cpf
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName
  }
}

class Student extends Person {
  getFullName(): string {
    return `This came from Student Class, name: ${this.name}`
  }

  getFullNameBySuperClass(): string {
    console.log('3º:  Test')
    const result = super.getFullName()
    return result
  }
}
class Client extends Person {
  getFullName(): string {
    return `This came from Client Class, name: ${this.name}`
  }
}

const person = new Person('Henrique', 'Reis', 25, '12345678901')
console.log('1º: ', person.getFullName())

const student = new Student('Henrique', 'Reis', 25, '12345678901')
console.log('2º: ', student.getFullName())
console.log('4º: ', student.getFullNameBySuperClass())

const client = new Client('Henrique', 'Reis', 25, '12345678901')
console.log('5º: ', client.getFullName())
