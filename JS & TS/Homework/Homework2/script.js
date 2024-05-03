// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrOfData = ['hello', 32, false, null, undefined, ['banana', 'apple'], {age: '40'}, 'grape', 654, true];
console.log(arrOfData[0]);
console.log(arrOfData[1]);
console.log(arrOfData[2]);
console.log(arrOfData[3]);
console.log(arrOfData[4]);
console.log(arrOfData[5]);
console.log(arrOfData[6]);
console.log(arrOfData[7]);
console.log(arrOfData[8]);
console.log(arrOfData[9]);

console.log('-----------------------------')

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1Obj = {
    title: 'Майстер і Маргарита',
    pageCount: 448,
    genre: 'Фантастика/Сатира'
}

let book2Obj = {
    title: '451 градус за Фаренгейтом',
    pageCount: 256,
    genre: 'Фантастика/Дистопія'
}

let book3Obj = {
    title: 'Теорія великого вибуху: Як, коли і чому почалася Всесвіт',
    pageCount: 384,
    genre: 'Наукова література'
}

console.log(book1Obj, book2Obj, book3Obj)

console.log('-----------------------------')

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4Obj = {
    title: "Хроніки Нарнії: Лев, чаклунка та стардрер",
    pageCount: 320,
    genre: "Фентезі",
    authors: [
        { name: "Клайв Льюїс", age: 55 }
    ]
};

let book5Obj = {
    title: "Вища математика для початківців",
    pageCount: 400,
    genre: "Наукова література",
    authors: [
        { name: "Іван Петренко", age: 42 },
        { name: "Марія Коваленко", age: 38 }
    ]
};

let book6Obj = {
    title: "Злочин і кара",
    pageCount: 576,
    genre: "Класика/Психологічна драма",
    authors: [
        { name: "Федір Достоєвський", age: 59 }
    ]
};

console.log(book4Obj, book5Obj, book6Obj)
console.log('-----------------------------')

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users= [
    {
        name: 'Михайло Сидоров',
        username: 'misha_s',
        password: 'newpassword123'
    },
    {
        name: 'Олексій Петренко',
        username: 'olexii_p',
        password: 'qwerty789'
    },
    {
        name: 'Анастасія Литвиненко',
        username: 'anastasia_l',
        password: 'strongpassword'
    },
    {
        name: 'Андрій Ковальов',
        username: 'andriy_k',
        password: 'securepass123'
    },
    {
        name: 'Ірина Мельничук',
        username: 'iryna_m',
        password: 'irina321'
    },
    {
        name: 'Сергій Зубенко',
        username: 'sergey_z',
        password: 'newpass456'
    },
    {
        name: 'Олег Іванов',
        username: 'oleg_ivanov',
        password: '123qwe'
    },
    {
        name: 'Тетяна Степанова',
        username: 'tanya_s',
        password: 'password789'
    },
    {
        name: 'Юрій Петров',
        username: 'yura_p',
        password: 'yurko123'
    },
    {
        name: 'Оксана Василенко',
        username: 'oksana_v',
        password: 'hello987'
    },
]

console.log(`1. ${users[0]['password']}`)
console.log(`2. ${users[1]['password']}`)
console.log(`3. ${users[2]['password']}`)
console.log(`4. ${users[3]['password']}`)
console.log(`5. ${users[4]['password']}`)
console.log(`6. ${users[5]['password']}`)
console.log(`7. ${users[6]['password']}`)
console.log(`8. ${users[7]['password']}`)
console.log(`9. ${users[8]['password']}`)
console.log(`10. ${users[9]['password']}`)

console.log('-----------------------------')

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
let temperatureArr = [
    {
        id: '0',
        title: 'Перший день',
        tempMorging: '10°C',
        tempAfternoon: '18°C',
        tempEvening: '12°C'
    },
    {
        id: '1',
        title: 'Другий день',
        tempMorging: '9°C',
        tempAfternoon: '17°C',
        tempEvening: '11°C'
    },
    {
        id: '2',
        title: 'Третій день',
        tempMorging: '11°C',
        tempAfternoon: '19°C',
        tempEvening: '13°C'
    },
    {
        id: '3',
        title: 'Четвертий день',
        tempMorging: '12°C',
        tempAfternoon: '20°C',
        tempEvening: '14°C'
    },
    {
        id: '4',
        title: 'П\'ятий день',
        tempMorging: '11°C',
        tempAfternoon: '18°C',
        tempEvening: '12°C'
    },
    {
        id: '5',
        title: 'Шостий день',
        tempMorging: '10°C',
        tempAfternoon: '17°C',
        tempEvening: '11°C'
    },
    {
        id: '6',
        title: 'Сьомий день',
        tempMorging: '9°C',
        tempAfternoon: '16°C',
        tempEvening: '10°C'
    }
]

console.log(temperatureArr)
console.log('-----------------------------')

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1

if (x != 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

x = 0

if (x != 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

x = -3

if (x != 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

console.log('-----------------------------')

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// Перша чверть: 0-14хв
// Друга чверть: 15-29хв
// Третя чверть: 30-44хв
// Четверта чверть: 45-59хв
let time = 45

let firstQuarter = time >= 0 && time <= 14
let secondQuarter = time >= 15 && time <= 29
let thirdQuarter = time >= 30 && time <= 44
let fourthQuarter = time >= 45 && time <= 59

if (firstQuarter) {
    console.log('Число попадає до першої чверті')
} else if (secondQuarter) {
    console.log('Число попадає до другої чверті')
} else if (thirdQuarter) {
    console.log('Число попадає до третьої чверті')
} else if (fourthQuarter) {
    console.log('Число попадає до четвертої чверті')
}  else {
    console.log('Ви ввели число яке не входить в проміжок від 0 до 59 включно')
}

console.log('-----------------------------')

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// В умові не сказали враховувати який рік - високосний чи ні, тому я писатиму код тільки для місяця, в якому 31 день
let day = 24

let firstDecade = day >= 1 && day <= 10
let secondDecade = day >= 11 && day <= 20
let thirdDecade = day >= 21 && day <= 31

if (firstDecade) {
    console.log("Число попадає в першу декаду")
} else if (secondDecade) {
    console.log("Число попадає в другу декаду")
} else if (thirdDecade) {
    console.log("Число попадає в третю декаду")
} else {
    console.log("Введене число не входить в проміжок від 1 до 31 включно")
}

console.log('-----------------------------')

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let timetableArr = [
    {
        id: 1,
        title: 'Понеділок',
        deals: [
            'Ранкова пробіжка або розминка',
            'Планування завдань на тиждень',
            'Підготовка та відправлення необхідних робочих документів'
        ]
    },
    {
        id: 2,
        title: 'Вівторок',
        deals: [
            'Заняття йогою або медитація',
            'Робота над проектом X',
            'Підготовка покупок та планування меню на тиждень'
        ]
    },
    {
        id: 3,
        title: 'Середа',
        deals: [
            'Читання книги з саморозвитку',
            'Зустріч з друзями',
            'Похід в спортзал або виконання вправ вдома'
        ]
    },
    {
        id: 4,
        title: 'Четвер',
        deals: [
            'Ранкова йога або прогулянка',
            'Робота над проектом Y  ',
            'Планування бюджету на наступний місяць'
        ]
    },
    {
        id: 5,
        title: 'П\'тниця',
        deals: [
            'Розбір та аналіз результатів проекту X.',
            'Підготовка до вечірки або побачення',
            'Вечірній відпочинок, перегляд цікавого фільму або читання книги'
        ]
    },
    {
        id: 6,
        title: 'Субота',
        deals: [
            'Прибирання вдома',
            'Прогулянка на свіжому повітрі',
            'Приготування домашнього обіду'
        ]
    },
    {
        id: 7,
        title: 'Неділя',
        deals: [
            'Сніданок у кафе з родиною або друзями',
            'Планування майбутнього тижня',
            'Особистий час: час для хобі, творчості або просто відпочинку'
        ]
    }
]

let dayNumber = 3

switch (dayNumber) {
    case 1:
        console.log(timetableArr[0]['title'])
        console.log(timetableArr[0]['deals'])
        break
    case 2:
        console.log(timetableArr[1]['title'])
        console.log(timetableArr[1]['deals'])
        break
    case 3:
        console.log(timetableArr[2]['title'])
        console.log(timetableArr[2]['deals'])
        break
    case 4:
        console.log(timetableArr[3]['title'])
        console.log(timetableArr[3]['deals'])
        break
    case 5:
        console.log(timetableArr[4]['title'])
        console.log(timetableArr[4]['deals'])
        break
    case 6:
        console.log(timetableArr[5]['title'])
        console.log(timetableArr[5]['deals'])
        break
    case 7:
        console.log(timetableArr[6]['title'])
        console.log(timetableArr[6]['deals'])
        break
    default:
        console.log('Введене число більше ніж від 1 до 7 включно')
}

console.log('-----------------------------')

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

let a = 32
let b = 2

if (a > b) {
    console.log(`Число ${a} більше ніж ${b}`)
} else if (a < b) {
    console.log(`Число ${b} більше ніж ${a}`)
} else if (a == b) {
    console.log('Введені числа однакові')
}

console.log('-----------------------------')

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//   (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xx = 'null'

// Перший розв'язок
xx = xx ? xx : 'default';
console.log(xx)

// Другий розв'язок
// if (xx === null || xx === undefined || xx === false || xx === '' || xx === "" || xx === `` || xx === NaN || xx === 0 || xx === -0 || xx === 0n) {
//     xx = "default"
//     console.log(xx)
// } else {
//     console.log(xx)
// }

console.log('-----------------------------')

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[1]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[2]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[3]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[4]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}

if (coursesAndDurationArray[5]['monthDuration'] >= 5) {
    console.log('Супер!')
} else {
    console.log('Погано')
}