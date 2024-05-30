let arr = []
arr.push('effwrfwefwef1')
arr.push('effwrfwefwef2')
arr.push('effwrfwefwef3')
arr.pop()
arr.unshift('start3')
arr.unshift('start2')
arr.unshift('start1')
arr.shift()
console.log(arr)

// let s = arr.join('.')
// console.log(s)

// let reverse = arr.reverse()
// console.log(reverse)
// console.log(arr)

// let toReversed = arr.toReversed()
// console.log(toReversed)
// console.log(arr)

// Видаляє елементи за вказаним діапазоном невключно
// let slice = arr.slice(1, 3)
// console.log(slice)
// console.log(arr)

// видаляє елементи за вказаним індексом та номером елементу
// тобто ми беремо елемент з індексом 0, вибираємо два елементи (включаючи перший), та замість цих двух елементів вставити стрічку 'hi'
// let splice = arr.splice(0, 2, 'hi')
// console.log(splice)
// console.log(arr)

// function deleteElement(arr, index) {
//     if (index > 0) {
//         arr.splice(index, 1)
//         return arr
//     }
//
//     throw new Error('index cannot be 0')
// }
//
// console.log(deleteElement([11, 22, 33, 44, 55], 2))


// function replacer(arr, index, repObj) {
//     arr.splice(index, 0, repObj)
//     return arr
// }
//
// console.log(replacer([11, 22, 33, 44, 55], 2, '!!!'))


// console.log(arr.indexOf('effwrfwef1'))


// arr.forEach(item => console.log(item))


// const numbers = [123, 345, 567, 57, -42, 123, -34]
// let filteredArr = numbers.filter(item => item > 0 ? true : false)
// console.log(filteredArr)


let users = [
    {name: 'John', age: '53', status: false},
    {name: 'Max', age: '31', status: true},
    {name: 'Oleg', age: '12', status: true},
    {name: 'Andrew', age: '43', status: false},
    {name: 'Vanya', age: '6', status: true},
    {name: 'Alex', age: '34', status: true},
    {name: 'Nazar', age: '23', status: true},
]

// let map = users.map(item => {
//     return item.age
// })
//
// console.log(map)


// let map = users.map((user, index, array) => ({...user, id: index + 1}))
// console.log(map)

// console.log(users.sort((a, b) => a.age + b.age))
// console.log(users.sort((a, b) => a.name.localeCompare(b.name)))


console.log(users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator[0].push(user)
    } else {
        accumulator[1].push(user)
    }
    return accumulator
}, [[], []]))