// class User {
//     id:number
//     name:string
//
//     constructor(id: number, name:string) {
//         this.id = id
//         this.name = name
//     }
// }
//
// class SuperUser extends User {
//     isAdmin:boolean
//
//     constructor(id:number,name:string, isAdmin:boolean) {
//         super(id, name)
//         this.isAdmin = isAdmin
//     }
// }
//
// let su1 = new SuperUser(1, 'vasya', true)
// let su2 = new SuperUser(2, 'petya', false)
// let user1 = new User(3, 'andrew')
// let user2 = new User(4, 'mark')
//
// const users:Array<User> = [su1, su2, user1, user2]
// console.log(users)

// abstract class Person {
//     id:number
//     name:string
//     abstract greeting(msg:string):void
//
//     constructor(id:number, name:string) {
//         this.id = id
//         this.name = name
//     }
// }
//
// let person:Person = {
//     id: 111,
//     name: 'wdfwde',
//     greeting(msg:string) {}
// }
//
// person.greeting('hello')

// interface IUser {
//     id:number
//     name:string
//     status:boolean
//     greeting: (msg:string, symbol:string) => void
// }
//
// let asd:IUser = {
//     id: 1,
//     name: 'fersf',
//     status: true,
//     greeting: (msg:string, symbol:string) => 'asd'
// }

interface IUser {
    id:number
    name:string
    status:boolean
    greeting: (msg:string, symbol:string) => void
}

interface IAdmin {
    isAdmin:boolean
}

type SuperPuperUserType = IUser & {age:number, height:number, password:string} & IAdmin

type SomeType = IUser | IAdmin

let x:SomeType = {
    isAdmin:true
}


type Seasons = "summer" | "winter"

class Car {
    productionSeasons: Seasons
}

let asd:Car = { productionSeasons: "summer" }

