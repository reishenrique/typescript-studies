// Interfaces em TypeScript

interface Funcionario {
  nome: string
  idade: number
  salario: number
}

interface Gerente extends Funcionario {
  departamento: string
  gerenciarEquipe(): void
}

interface Desenvolvedor extends Funcionario {
  linguagens: string[]
  codar(): void
}

const gerente: Gerente = {
  nome: 'Henrique',
  idade: 25,
  salario: 10000,
  departamento: 'Tecnologia',
  gerenciarEquipe() {
    console.log('Gerenciando equipe de Tecnologia e Desenvolvimento')
  },
}

const desenvolvedor: Desenvolvedor = {
  nome: 'Henrique',
  idade: 25,
  salario: 5000,
  linguagens: ['JavaScript', 'TypeScript', 'Go'],
  codar() {
    console.log(`Henrique está desenvolvendo em ${desenvolvedor.linguagens[1]}`)
  },
}

console.log('Gerente: ', gerente)
console.log('Desenvolvedor: ', desenvolvedor)

// Exemplo de E-commerce

interface Produto {
  id: number
  nome: string
  preco: number
}

interface Eletronico extends Produto {
  marca: string
  garantia: boolean
  ligar(): void
}

interface Livro extends Produto {
  autor: string
  genero: string
  ler(): void
}

const celular: Eletronico = {
  id: 1,
  nome: 'Smartphone',
  preco: 1500,
  marca: 'Samsung',
  garantia: true,
  ligar() {
    console.log('Ligando celular...')
  },
}

const livro: Livro = {
  id: 2,
  nome: 'Aprendendo TypeScript',
  preco: 50,
  autor: 'Jhon Doe',
  genero: 'Tecnologia',
  ler() {
    console.log('Lendo livro...')
  },
}

const ligarCelular = celular.ligar()
const lerLivro = livro.ler()
