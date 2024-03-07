/* eslint-disable no-useless-constructor */

// Agregação e composição entre classes
class Motor {
  constructor(public tipo: string) {}

  ligar() {
    console.log('Motor ligado')
  }
}

// Exemplo de agregação: Classe Carro
class Carro {
  constructor(
    public marca: string,
    public motor: Motor,
  ) {}

  acelerar() {
    console.log(`O carro da marca ${this.marca} está acelerando`)
    this.motor.ligar() // Acessando o método ligar da classe Motor porque o construtor recebe a classe como tipo
  }
}

// Criando instâncias
const motorCarro = new Motor('V8')
const meuCarro = new Carro('Ferrari', motorCarro)
meuCarro.acelerar()

/*
'Motor' é agregado à classe 'Carro', pois um carro "tem-um" motor. Cada carro tem uma instância de um motor 
*/

// Exemplo de composição: Classe Casa e suas partes

class Quarto {
  constructor(public tamanho: string) {}
}

class Cozinha {
  constructor(public equipamentos: string[]) {}
}

class Casa {
  constructor(
    public quarto: Quarto,
    public cozinha: Cozinha,
  ) {}

  descrever() {
    console.log(
      `Esta casa possui um quarto de tamanho ${
        this.quarto.tamanho
      } e uma cozinha equipada com ${this.cozinha.equipamentos.join(', ')}`,
    )
  }
}

// Criando instâncias
const quartoPrincipal = new Quarto('grande')
const cozinhaMinhaCasa = new Cozinha(['geladeira', 'fogão', 'microondas'])
const minhaCasa = new Casa(quartoPrincipal, cozinhaMinhaCasa)
minhaCasa.descrever()

/*
'Quarto' e 'Cozinha' são partes da classe 'Casa', e a classe 'Casa' é composta por um quarto e uma cozinha.
Sem a casa, os quartos e cozinhas não fazem sentido, indicando uma relação de composição mais forte.
*/
