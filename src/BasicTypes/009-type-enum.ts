// Type Enum

enum Colors {
  RED, // 0
  BLUE, // 1
  GREEN, // 2
}

console.log(Colors[0]) // RED - Valor que está no índice 0
console.log(Colors.BLUE) // 1 - Valor do índice que BLUE está

enum ColorsTwo {
  PURPLE = 10,
  BROWN = 20,
  CYAN = 30,
}

console.log(ColorsTwo[10]) // Purple - Valor do índice 10
console.log(ColorsTwo.BROWN) // 20 - Valor do índice que BROWN está
console.log(ColorsTwo[0]) // undefined porque não existe índice 0

enum ColorThree {
  YELLOW = 'yellow',
  ORANGE = 'orange',
  BLACK = 'black',
}

console.log(ColorThree.BLACK) // black
console.log(ColorThree) // Retorna o objeto inteiro

// Exemplo 2
enum Status {
  inProgress = 'inProgress',
  Completed = 'completed',
  Peding = 'pending',
}

// eslint-disable-next-line prefer-const
let currentStatus = Status.inProgress as Status

if (currentStatus === Status.Completed) {
  console.log('O status atual é completo')
} else if (currentStatus === Status.Peding) {
  console.log('O estado atual é pendente')
} else if (currentStatus === Status.inProgress) {
  console.log('O status atual está em progresso.') // Irá printar aqui
}
