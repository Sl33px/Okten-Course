// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let randomWordsArr = ['Juggernaut', 'Crystal Maiden', 'Pudge', 'Invoker', 'Anti-Mage', 'Drow Ranger', 'Axe', 'Lina', 'Rubick', 'Earthshaker']

for (let div of randomWordsArr) {
    document.write(`
    <div>${div}</div>
    `)
}
document.write('<hr>')
// -------------------------

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let randomWordsArrID = 0

for (let div of randomWordsArr) {
    document.write(`
    <div>${++randomWordsArrID}. ${div}</div>
    `)
}

document.write('<hr>')
// -------------------------

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let randomWordsArr2ID = 0

let randomWordsArr2 = ['Juggernaut', 'Crystal Maiden', 'Pudge', 'Invoker', 'Anti-Mage',
              'Drow Ranger', 'Axe', 'Lina', 'Rubick', 'Earthshaker', 'Mirana',
              'Shadow Fiend', 'Windranger', 'Slardar', 'Tidehunter', 'Phantom Assassin',
              'Zeus', 'Queen of Pain', 'Nature\'s Prophet', 'Sand King'];

while (randomWordsArr2ID <= randomWordsArr2.length - 1) {
    document.write(`
        <div><h1>${randomWordsArr2[randomWordsArr2ID]}</h1></div>
    `)
    randomWordsArr2ID++
}

document.write('<hr>')
// -------------------------

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

randomWordsArr2ID = 0

while (randomWordsArr2ID <= randomWordsArr2.length - 1) {
    document.write(`
        <div><h1>${randomWordsArr2ID + 1}. ${randomWordsArr2[randomWordsArr2ID]}</h1></div>
    `)
    randomWordsArr2ID++
}

document.write('<hr>')
// -------------------------

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (let item of listOfItems) {
    document.write(`
        <li>${item}</li>
    `)
}
document.write(`</ul>`)

document.write('<hr>')
// -------------------------

// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (item of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${item['title']}. Price - ${item['price']}</h3>
            <img src="${item['image']}" alt="img" class="product-image">
        </div>
    `)
}

document.write('<hr>')
// -------------------------

// Є масив users. За допомоги циклу вивести:
// Користувачів зі статусом true

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (item of users) {
    if (item['status'] === true) {
        document.write(`
            <p>Name: ${item['name']}</p>
            <p>Age: ${item['age']}</p>
            <p>Status: ${item['status']}</p>
            <p>--------------------------</p>
        `)
    }
}

document.write('<hr>')
// -------------------------
// - користувачів зі статусом false

for (item of users) {
    if (item['status'] === false) {
        document.write(`
            <p>Name: ${item['name']}</p>
            <p>Age: ${item['age']}</p>
            <p>Status: ${item['status']}</p>
            <p>--------------------------</p>
        `)
    }
}

document.write('<hr>')
// -------------------------
// - користувачів які старші за 30 років

for (item of users) {
    if (item['age'] > 30) {
        document.write(`
            <p>Name: ${item['name']}</p>
            <p>Age: ${item['age']}</p>
            <p>Status: ${item['status']}</p>
            <p>--------------------------</p>
        `)
    }
}