// Tipando funções

type callBackFunctionType = (item: string) => string

function mapStrings(
  array: string[],
  callbackFunction: callBackFunctionType,
): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    const arrayElements = array[i]
    console.log('Elementos do meu array:', arrayElements)
    newArray.push(callbackFunction(arrayElements))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapStrings(abc, (elements) => elements.toUpperCase())

console.log(abcMapped)

// Exemplo 2

type sumType = (x: number, y: number) => number

const sumNumber: sumType = (x, y) => {
  return x + y
}

console.log(sumNumber(400, 700))
