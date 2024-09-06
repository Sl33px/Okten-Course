let word1:string = 'hello'
let word2:string = 'owu'
let word3:string = 'com'
let word4:string = 'ua'
let num1:number = 1
let num2:number = 10
let num3:number = -999
let num4:number = 123
let num5:number = 3.14
let num6:number = 2.7
let num7:number = 16
let bool1:boolean = true
let bool2:boolean = false

let firstName:string = 'Dmytro'
let middleName:string = 'Illich'
let lastName :string= 'Shaposhnikov'

let person:string = `${lastName} ${firstName} ${middleName}`

console.log(word1)
console.log(word2)
console.log(word3)
console.log(word4)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(bool1)
console.log(bool2)
console.log(person)

let a:number = 100;
let b:string = '100';
let c:boolean = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

let prompt1:string = prompt('What is your firstname?');
let prompt2:string = prompt('What is your middlename?');
let prompt3:string = prompt('What is your age');
console.log(`firstname: ${prompt1}`);
console.log(`middlename: ${prompt2}`);
console.log(`age: ${prompt3}`);