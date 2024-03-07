/* eslint-disable prefer-const */
// Union Types

// Declarando uma variável do tipo string ou number
const constUnionTypeExample: string | number = 10
console.log('Exemplo 1:', constUnionTypeExample)

// Outro exemplo
let letUnionTypeExample: string | number
letUnionTypeExample = 100
console.log('Exemplo 2:', letUnionTypeExample)

letUnionTypeExample = 'Teste de união de tipos'
console.log('Exemplo 3:', letUnionTypeExample)

// Exemplo utilizando union type como parâmetro de função
function printLength(stringOrArray: string | string[]) {
  if (typeof stringOrArray === 'string') {
    console.log(stringOrArray.length)
  } else {
    console.log(stringOrArray.length)
  }
}

printLength('Olá, teste') // A frase contém 10 caracteres
printLength(['Um', 'Dois']) // O array contem 2 indices
