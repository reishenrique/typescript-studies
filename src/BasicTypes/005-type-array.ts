// Array Type

function arrayMultiplier(...args: number[]): number {
  return args.reduce((accumulator, value) => accumulator * value)
}

function stringConcatenator(...args: string[]): string {
  return args.join(' ')
}

function toUpperCaseString(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase())
}

// Armazenando a execução da função em uma variavel e printando no terminal
const multiplierResult: number = arrayMultiplier(233, 4432, 120393)
console.log(multiplierResult)

const concatenatorResult: string = stringConcatenator(
  'Netflix',
  'Interview',
  'Data',
  'Structure',
)
console.log(concatenatorResult)

const toUpperCaseStringResult = toUpperCaseString(
  'test',
  'uppercase',
  'function',
)
console.log(toUpperCaseStringResult)
