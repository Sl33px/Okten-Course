// // таку функцію неможливо викликати до того, як вона була оголошена
// const foobar = function (a, b) {
//     return a + b
// }
//
// //  стрілочна функція
// const fn = (a, b) => a + b
//
// const testfn = (a, b) => {
//     let result = a + b
//     console.log(result)
//     return result
// }
//
// // анонімна функція
// (function () {
//     console.log('hello world')
// }())
//
// let newVar = function(a, b) {
//     return a + b
// }(10, 20)
// console.log(newVar)

///////////////////////////////////////

// let user = {
//     username: 'kokos',
//     email: 'kokos@gmail.com',
//     password: 'kokos@gmail.com',
//     greeting: function () {
//         console.log('Hello World! ' + this.username);
//     }
// }
//
// user.greeting()
///////////////////////////////////////////////////
// function objectCreator(id,name) {
//     return {id:id, name:name};
// }
//
// let kokos = objectCreator(1, 'kokos');
// let abrikos = objectCreator(1, 'abrikos');
// console.log(kokos, abrikos);

////////////////////////////////////////////////

// let arr = [11, 22, 33, [44, 55], [66, 77, [111, 122]]]
//
// let resultArray = []
//
// function flatter(arr) {
//     for(let item of arr) {
//         if (Array.isArray(item)) {
//             flatter(item)
//         } else {
//             resultArray.push(item)
//         }
//     }
// }
//
// flatter(arr)
// console.log(resultArray)

///////////////////////////////////////////

// function* cardDeaing() {
//     let cards = [
//         '6 spade',
//         '7 spade',
//         '8 spade',
//
//         '6 heart',
//         '7 heart',
//         '8 heart',
//
//         '6 club',
//         '7 club',
//         '8 club',
//
//         '6 diamond',
//         '8 diamond',
//         '7 diamond'
//     ]
//
//     for (const card of cards) {
//         yield card
//     }
// }
//
// let dealer = cardDeaing()
// console.log(dealer.next())
// console.log(dealer.next())

///////////////////////////////

// console.log('start')
// try {
//     console.log(a)
// } catch (e) {
//     console.log(e)
// } finally {
//     console.log('final')
// }
// console.log('end')

//////////////////////////////////

function foobar(obj) {
    if (!obj.wife) {
        throw new Error('obj.wife is empty')
    } else {
        console.log(obj.wife.name)
    }
}

try {
    foobar({})
} catch (e) {
//     .....
}