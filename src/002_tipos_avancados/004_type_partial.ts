/* eslint-disable @typescript-eslint/no-unused-vars */

// Partial Type

/*
O `Partial` em TypeScript é um utilitário genérico que cria um novo tipo a partir de um tipo existente,
onde todas as propriedades são opcionais. Isso é especialmente útil quando você deseja representar um
estados onde apenas algumas propriedades de um tipo completo podem ser definidas, como em cenários de 
atualização parcial de um objeto.

Sintaxe do `Partial`

A definição de `Partial` é bastante simles e pode ser encontrada na biblioteca padrão do TypeScript:
*/

type Partial1<T> = {
  [P in keyof T]?: T[P]
}

/* 
Essa definicação usa tipos mapeados para iterar sobre todas as propriedades de `T` (`keyof T`) e
torna cada uma dessas propriedades opcional (`?:`)
*/

// Exemplo de uso do `Partial`

// Definindo um tipo completo

type PersonType = {
  name: string
  age: number
  address: string
}

// Usando `Partial` para criar um tipo parcial de Person

type PartialPerson = Partial<PersonType>

// Aqui, `PartialPerson` terá todas as propriedades que `Person`, mas todas serão opcionais.

// Exemplos válidos para o PartialPerson

const person1: PartialPerson = { name: 'Alice' }
const person2: PartialPerson = { age: 30 }
const person3: PartialPerson = { address: '123 Main St', name: 'Bob' }
const person4: PartialPerson = {} // Todas as propriedades são opcionais, estão pode não conter nenhuma no objeto.

// Usos comuns do `Partial`

// 1. Funções de Atualizações

// Partial é frequentemente usado em funções que atualizam objetos parcialmente

function updatePerson(
  person: PersonType,
  updates: Partial<PersonType>,
): PersonType {
  return { ...person, ...updates }
}

const personData: PersonType = {
  name: 'Alice',
  age: 30,
  address: '123 Main St',
}

const updatedPerson = updatePerson(personData, { age: 31 }) // updatedPerson: { name: "Alice", age: 31, address: "123 Main St"}

// 2. Construção de Objetos Dinâmicos

// `Partial` facilita a construção de objetos em etapas, onde nem todas as propriedades são conhecidas de imediato.

function createPerson(name: string): Partial<PersonType> {
  const newPerson: Partial<PersonType> = { name }

  return newPerson
}

const person5 = createPerson('Charlie')

/*
Vantagens do `Partial`

- Flexibilidade: Permite que você trabalhe com objetos onde apenas algumas propriedades são necessárias
- Tipo Seguro: Ainda mantém o benefício da verificação de tipos, mas sem exigir que todas as propriedades,
    sejam definidas de imediato
- Facilidade de uso: O trabalho com objetos em funções de atualização e inicialização

Resumo:

O `Partial` é uma ferramente poderosa no TypeScript que simplifica a manipulação de objetos,
tornando todas as propriedades opcionais. Ele é amplamente utilizado em cenários onde atualizações
parciais ou estados intermediários são comuns, oferecendo flexibilidade sem sacrificar a segurança dos tipos.


*/
