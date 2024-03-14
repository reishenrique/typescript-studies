// Type Predicate

// Definição de tipos
interface Animal {
  nome: string
  tipo: string
}

// Type predicate para verificar se um objeto é do tipo Animal
function isAnimal(obj: any): obj is Animal {
  return obj && typeof obj.nome === 'string' && typeof obj.tipo === 'string'
}

// Função que verifica e imprime o tipo do animal se for um Animal
function printTipoAnimal(obj: any) {
  if (isAnimal(obj)) {
    console.log(`O ${obj.nome} é um ${obj.tipo}`)
  } else {
    console.log('Não é um animal reconhecido')
  }
}

// Exemplo de uso
const cachorro = { nome: 'Rex', tipo: 'cachorro' }
const gato = { nome: 'Miau', tipo: 'gato' }
const peixe = { tipo: 'peixe' } // Propriedade 'nome' ausente

printTipoAnimal(cachorro) // Output: O Rex é um cachorro.
printTipoAnimal(gato) // Output: O Miau é um gato.
printTipoAnimal(peixe) // Output: Não é um animal reconhecido.

/*
- Neste exemplo, o tipo predicate 'isAnimal' verifica se um objeto poussui as propriedades 'nome' e 'tipo',
ambas do tipo 'string', e retorna um booleano. Em seguida, a função 'imprimirTipoAnimal' usa esse tipo predicate
para verificar se o objeto passado como argumento é um animal reconhecido e, em caso afirmativo, imprime o tipo do animal.

- Esse exemplo demonstra como você pode usar um tipo predicate para realizar verificações mais complexas nos tipos
de objetos e garantir que determinadas propriedades estejam presentes antes de acessá-las. Isso ajuda a evitar erros em tempo
de execução e a escrever código mais seguro
*/
