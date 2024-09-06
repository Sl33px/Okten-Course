let num1 = 100
let str1 = 'sgrsgsrg'
const str2:string = 'sefsefd'
let bool1 = false
bool1 = true
let var1:any = 123

function calculator(a: number, b:number) {
    return a + b
}

calculator(10, 20)

class User {
    name: string
    age: number
    status: boolean

    constructor(name: string, age: number, status: boolean) {
        this.name = name
        this.age = age
        this.status = status
    }
    greeting?() {
        console.log('hello')
    }
}

class SuperUser extends User {
    isAdmin:boolean

    constructor(name: string, age: number, status: boolean, isAdmin: boolean) {
        super(name, age, status)
        this.isAdmin = isAdmin
    }


    greeting() {
        console.log('world')
    }
}

let users:User[] = [
    new User('asd', 123, true),
    {name: 'vasya', age: 23, status: false},
    {name: 'anya', age: 23, status: true},
    {name: 'oleg', age: 23, status: true},
    {name: 'inna', age: 23, status: false},
    {name: 'andrew', age: 23, status: false},
    {name: 'steve', age: 23, status: true},
    new SuperUser('asd', 123, false, true)
]

enum Gender {
    MALE = 0,
    FEMALE = 1,
    NON_BINARY
}

class UserX {
    constructor(private _id:number, private _name:string, private _gender:Gender) {
        this._id = _id
        this._name = _name
        this._gender = _gender
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get gender(): Gender {
        return this._gender;
    }

    set gender(value: Gender) {
        this._gender = value;
    }
}

let user = new UserX(1, 'vasya', Gender.MALE)

class Driver<T, X> {
    id: T
    name: X


    constructor(id: T, name: X) {
        this.id = id;
        this.name = name;
    }
}

let driver1 = new Driver<number, string>(1, 'dsds')
let driver2 = new Driver<string, string>('sfsrwfr1231', 'reterte')

console.log(driver1)
console.log(driver2)

