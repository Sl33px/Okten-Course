// Створити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let div = document.createElement('div')
div.classList.add('main-div-container')

let f1 = document.forms.f1

f1.addEventListener('submit', function(e) {
    e.preventDefault()

    let surname = f1.surname.value
    let name = f1.name.value
    let age = f1.age.value
    let obj = {surname, name, age}

    let divContainer = document.createElement('div')
    divContainer.classList.add('div-container')

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')

    p1.innerText = `Surname: ${obj.surname}`
    p2.innerText = `Name: ${obj.name}`
    p3.innerText = `Age: ${obj.age}`

    divContainer.append(p1, p2, p3)
    div.appendChild(divContainer)
})

document.body.append(div)

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let curNum = localStorage.getItem('pageCounter')

if (curNum === null) {
    curNum = 0
} else {
    curNum = parseInt(curNum, 10)
}

curNum++
localStorage.setItem('pageCounter', curNum)

let divWithNumber = document.createElement('div')
divWithNumber.classList.add('div-with-number')
divWithNumber.innerText = curNum

document.body.append(divWithNumber)


// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
document.addEventListener("DOMContentLoaded", () => {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || []
    sessions.push(new Date().toLocaleString())
    localStorage.setItem('sessions', JSON.stringify(sessions))
});


// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
document.addEventListener('DOMContentLoaded', () => {
    const objectContainer = document.getElementById('objectContainer')
    const prevButton = document.getElementById('prevButton')
    const nextButton = document.getElementById('nextButton')

    const objects = Array.from({ length: 100 }, (_, i) => `Object ${i + 1}`)

    let currentPage = 0
    const objectsPerPage = 10

    function displayObjects(page) {
        objectContainer.innerHTML = ''
        const start = page * objectsPerPage
        const end = start + objectsPerPage
        const pageObjects = objects.slice(start, end)

        pageObjects.forEach(obj => {
            const div = document.createElement('div')
            div.className = 'object'
            div.textContent = obj
            objectContainer.appendChild(div)
        })
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--
            displayObjects(currentPage)
        }
    })

    nextButton.addEventListener('click', () => {
        if ((currentPage + 1) * objectsPerPage < objects.length) {
            currentPage++
            displayObjects(currentPage)
        }
    })

    displayObjects(currentPage)
});

// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let kgInput = document.getElementById('kgInput')
let poundInput = document.getElementById('poundInput')

kgInput.addEventListener('input', function(e) {
    poundInput.value = (e.target.value * 2.205).toFixed(3)
})

// Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let removeDiv = document.getElementById('text')
let deleteBtn = document.getElementById('delete-text-btn')
deleteBtn.addEventListener('click', (e) => {
    removeDiv.remove()
})


// створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('submitButton').addEventListener('click', function() {
    const age = document.getElementById('ageInput').value;
    const messageElement = document.getElementById('message');

    if (age === '') {
        messageElement.textContent = 'Будь ласка, введіть свій вік.'
    } else if (isNaN(age)) {
        messageElement.textContent = 'Будь ласка, введіть коректне число.'
    } else if (age < 18) {
        messageElement.textContent = 'Вам менше ніж 18 років.'
    } else if (age === 18) {
        messageElement.textContent = 'Вам 18 років.'
    } else if (age > 18) {
        messageElement.textContent = 'Вам більше ніж 18 років.'
    } else {
        messageElement.textContent = 'Вам 18 років або більше.'
    }
})



// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
document.getElementById('createTableButton').addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rowsInput').value)
    const cells = parseInt(document.getElementById('cellsInput').value)
    const content = document.getElementById('contentInput').value
    const tableContainer = document.getElementById('tableContainer')

    tableContainer.innerHTML = ''
    const table = document.createElement('table')

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < cells; j++) {
            const td = document.createElement('td')
            td.textContent = content
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

    tableContainer.appendChild(table)
})



// (Додатковачастина для завдання)
// (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
function getCurrentTimeInSeconds() {
    return Math.floor(Date.now() / 1000);
}

let currentPrice = localStorage.getItem('price') ? parseInt(localStorage.getItem('price')) : 100;
let lastUpdateTime = localStorage.getItem('lastUpdateTime') ? parseInt(localStorage.getItem('lastUpdateTime')) : 0;

let currentTime = getCurrentTimeInSeconds();

if (currentTime - lastUpdateTime >= 10) {
    currentPrice += 10;
    lastUpdateTime = currentTime;
}

localStorage.setItem('price', currentPrice);
localStorage.setItem('lastUpdateTime', lastUpdateTime);

document.getElementById('priceBlock').textContent = currentPrice + 'грн';