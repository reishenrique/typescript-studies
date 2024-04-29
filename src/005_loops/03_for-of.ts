/* 
For of percorre objeto iterativos. incluindo arrays, map, set e objetos
Chamando uma função personalizada com instruções a serem executadas para o
valor de cada objeto destinto.
*/

// A cada iteração, vou printar o valor de cada elemento no armazenado no array
const iterable = [10, 20, 30]

for (const value of iterable) {
  console.log('Valores de cada elemento do array: ' + value)
}

// Iterando sobre uma string
const stringIterable = 'boo'

for (const value of stringIterable) {
  console.log('Valores de cada elemento da string: ' + value)
}

// Iterando sobre um Map
const mapIterable = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])

for (const entry of mapIterable) {
  console.log('Todos os elementos do Map: ' + entry)
}

for (const [key, value] of mapIterable) {
  console.log('Apenas os valores do Map: ' + value)
}

// Iterando sobre um Set
const setIterable = new Set([1, 1, 2, 2, 3, 3])

for (const value of setIterable) {
  console.log('Valores duplicados removidos e printados: ' + value)
}
