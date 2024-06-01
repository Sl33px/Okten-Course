// function userBuilder(id, name) {
//     return {id: id, name: name};
// }
//
// let user1 = userBuilder(1, "John");

// /////////////////////////////////////
// function User(id, name, wife, dogName, dogBreed) {
//     this.id = id;
//     this.name = name;
//     this.wife = wife;
//     this.dogName = dogName;
//     this.dogBreed = dogBreed;
//
//     this.greeting = msg => `${msg} my name is ${this.name}`
// }
//
// let user1 = new User(1, 'asdff', {name: 'Olga'}, 'kokos', 'kokker');
//
// console.log(user1 instanceof User);
//
// console.log(user1.greeting('hello'))
// user1.work = () => console.log('efegrergergerg')
// user1.work()
// console.log(user1)

// /////////////////////////////////////
// class User {
//     constructor(id, name) {
//         this._id = id;
//         this._name = name;
//     }
//
//     greeting() {
//         returm `${msg} my name is ${this.name}`
//     }
//
//
//     get id() {
//         return this._id;
//     }
//
//     set id(value) {
//         this._id = value;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
// }
//
// let user = new User(1, 'feferf');
// console.log(user)

// /////////////////////////////////////
// let date = new Date();
// console.log(date);
// date.getMilliseconds()

// /////////////////////////////////////
// Array.prototype.xxx = 100500
//
// Array.prototype.print = () => console.log(this)
// let arr = [11, 22, 33]
// arr.print()

Array.prototype.myFilter = function = () => {
    let arr = []
    for (const item of this) {
        if (callback(item)) {
            arr.push(item)
        }
    }
    return arr
}

users = [
    {
        id: 0,
        age: 12,
        name: 'оненоенокн'
    },
    {
        id: 1,
        age: 45,
        name: 'акуацкац'
    },
    {
        id: 3,
        age: 32,
        name: 'мпенкоеное'
    },
]

console.log(users.myFilter((user) => user.age))

// /////////////////////////////////////