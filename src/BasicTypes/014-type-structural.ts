type User = { userName: string; password: string }
type VerifyUserFn = (user: User, receivedUser: User) => boolean

const verifyUser: VerifyUserFn = (user, receivedUser) => {
  return (
    user.userName === receivedUser.userName &&
    user.password === receivedUser.password
  )
}

// Não é preciso tipar essas variáveis porque elas atendem o que os tipo da função espera
const dbUser = { userName: 'reishenrique', password: 'hprhpr09' }
const receivedUser = { userName: 'reishenrique', password: 'hprhpr09' }

console.log(verifyUser(dbUser, receivedUser))

// Exemplo 2

type Point = { x: number; y: number }
const point3D = { x: 1, y: 2, z: 3 }

const point: Point = point3D
console.log(point)
