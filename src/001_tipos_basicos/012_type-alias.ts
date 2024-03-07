// Type

type myType = number // Criando um tipo como number
const myVariable: myType = 30 // Atribuindo o tipo criado em uma variável

console.log('O tipo da minha variavel é:', typeof myVariable) // Output: number

// Type Alias

type Person = {
  name: string
  age: number
}

type Employee = Person & {
  position: string
}

const worker: Employee = {
  name: 'Henrique',
  age: 25,
  position: 'Unemployed',
}

console.log('Object worker:', worker)

// Type para união de tipos

type workerStatus = 'online' | 'offline' | 'busy' | 'away'
const state: workerStatus = 'online'
console.log('Status of the worker:', state)
