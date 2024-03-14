// Intersection Generics

type Coordenada = { x: number; y: number }
type Tamanho = { largura: number; altura: number }

// Função que cria um retângulo com coordenada e tamanho
function criarRetangulo<T extends Coordenada, U extends Tamanho>(
  coordenada: T,
  tamanho: U,
): T & U {
  return { ...coordenada, ...tamanho }
}

// Exemplo de uso
const ponto: Coordenada = { x: 10, y: 20 }
const tamanho: Tamanho = { largura: 100, altura: 200 }

const retangulo = criarRetangulo(ponto, tamanho)
console.log(retangulo) // Output: { x: 10, y: 20, largura: 100, altura: 200 }

/*
- Neste exemplo, a função 'criarRetangulo' recebe dois parâmetros genéricos 'T' e 'U'
- Onde 'T' estende 'Coordenada' e 'U' estende 'Tamanho'. A função retorna um tipo que é uma
interseção de 'T' e 'U', ou seja, um tipo que possui todas as propriedades de 'T' e 'U'.
- Isso permite criar um retângulo com coordenadas e tamanhos especificados
*/
