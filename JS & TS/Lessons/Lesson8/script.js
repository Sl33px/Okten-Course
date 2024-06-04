// OPTIONAL CHAIN OPERATOR
let  user = {}
console.log(user.wife?.age)

function foobar(id, name, greeting) {
    return {id, name, greeting, work () {}}
}

// SPREAD OPERATOR
let users = [
    {name: 'John', age: '53', status: false},
    {name: 'Max', age: '31', status: true},
    {name: 'Oleg', age: '12', status: true},
    {name: 'Andrew', age: '43', status: false},
    {name: 'Vanya', age: '6', status: true},
    {name: 'Alex', age: '34', status: true},
    {name: 'Nazar', age: '23', status: true},
]

let map = users.map((user, index) => {
    return {...user, id: index + 1}
})

// використання слова static при створенні методів в класах, дозволяє викликати ці функції в любому класі, без прив'язки до первного об'єкту
class SomeClass {
    static foobar() {

    }
}

SomeClass.foobar()


// перетворення об'єкту в стрічку завдяки методу stringify
user = {
    id: 1,
    name: 'vasya',
    wife: {}
}

let s = JSON.stringify(user)
console.log(s)

// перетворення стрічки в об'єкт завдяки методу parse
let parse = JSON.parse(s)
console.log(parse)

let cloner = obj => JSON.parse(JSON.stringify(obj))
console.log('Робота нашої функції копіювання об\'єкту:')
console.log(cloner(user))

let copyOfUser = Object.create(user)

// console.log(copyOfUser)
// console.log(copyOfUser.id)
// console.log(copyOfUser.name)
// copyOfUser.id = 100500
// console.log(copyOfUser.hasOwnProperty('id'))
// console.log(copyOfUser)
// console.log(copyOfUser.id)


// DESCRIPTORS
let obj = {}
Object.defineProperty(obj, 'id', {
    value: 200,
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(obj)


// DESCTURTURISATION
let student = {
    id: 0,
    name: 'vasya',
    age: 20
}
let {id:userId, name, age} = student
console.log(userId)