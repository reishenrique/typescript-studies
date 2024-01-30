// Type never

// Função que lança uma exceção mas nunca retornará um valor
function throwError(message: string): never {
  throw new Error(message)
}

throwError('Erro teste')

// Função que faz um loop infinito
function infiniteLoop(): never {
  while (true) {
    /* empty */
  }
}
