// Type Null
let x // x é undefined porque não existe um valor atribuído
if (typeof x === 'undefined') x = 20 // se o tipo de x for undefined, atribua o valor de 20 para x
console.log(x * 2) // 40

// Criando uma interface para tipar o retorno da função
interface IPerson {
  firstName: string
  lastName?: string
}

function createPerson(firstName: string, lastName?: string): IPerson {
  return { firstName, lastName }
}

console.log(createPerson('Henrique', 'Reis'))

// Type Null
function squareOf(x: any) {
  if (typeof x === 'number') return x * x
  return null
}

const squareOfTwoNumber = squareOf(5)
const squareOfTwoStrings = squareOf('5')

if (squareOfTwoNumber === null) {
  console.log('Invalid squareOf')
} else {
  console.log(squareOfTwoNumber)
}

if (squareOfTwoStrings === null) {
  console.log('Invalid squareOf')
} else {
  console.log(squareOfTwoStrings)
}
