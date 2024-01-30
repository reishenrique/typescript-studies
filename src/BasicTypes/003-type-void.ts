// Tipo Void

// Função utilizando o retorno 'void'
function withoutReturn(...args: string[]): void {
  console.log(args.join(' '))
  console.log(args)
}

withoutReturn('Henrique', 'Teste')

// Objeto retornando void em seu método
const person = {
  name: 'Henrique',
  lastName: 'Reis',

  showName(): void {
    console.log(`My name is ${this.name} ${this.lastName}`)
  },
}

person.showName()
