/* eslint-disable no-useless-constructor */

// Type Alias em Classes

type TipoNome = {
  nome: string
}

type TipoSobrenome = {
  sobrenome: string
}

type TipoNomeCompleto = {
  nomeCompleto(): string
}

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome
  }
}

const pessoa1 = new Pessoa('Henrique', 'Reis')
console.log(pessoa1.nomeCompleto())
