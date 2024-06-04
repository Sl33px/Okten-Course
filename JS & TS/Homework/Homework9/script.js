// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div')

div.classList.add('wrap', 'collapse', 'alpha', 'beta')

div.style.backgroundColor = 'lightblue'
div.style.color = 'black'
div.style.fontSize = '20px'

div.innerText = 'Hello World!'

document.body.appendChild(div)

let clonedDiv = div.cloneNode(true)
document.body.append(clonedDiv)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const arrOfLi = ['Main', 'Products', 'About us', 'Contacts']
const ul = document.createElement('ul')

arrOfLi.forEach(item => {
    const li = document.createElement('li')
    li.innerText = item
    ul.appendChild(li)
})

document.body.appendChild(ul)

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

for (let item of coursesAndDurationArray) {
    let div = document.createElement('div')
    div.style.border = '2px solid black'
    div.style.width = '300px'
    div.style.textAlign = 'center'
    div.style.marginTop = '5px'

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')

    p1.innerHTML = `Title: ${item.title}`
    p2.innerHTML = `Month Duration: ${item.monthDuration}`

    div.append(p1, p2)
    document.body.appendChild(div)
}


// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (let item of coursesAndDurationArray) {
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    div.classList.add('item')
    h3.classList.add('heading')
    p.classList.add('description')

    h3.innerHTML = `Heading: ${item.title}`
    p.innerHTML = `Description: ${item.monthDuration}`

    div.append(h3, p)
    document.body.appendChild(div)
}

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// name, surname, age, info, photo

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (let item of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');

    let img = document.createElement('img');
    let name = document.createElement('p');
    let surname = document.createElement('p');
    let age = document.createElement('p');
    let info = document.createElement('p');

    name.innerHTML = `<b>Name</b>: ${item.name}`;
    surname.innerHTML = `<b>Surname</b>: ${item.surname}`;
    age.innerHTML = `<b>Age</b>: ${item.age}`;
    info.innerHTML = `<b>Info</b>: ${item.info}`;
    img.setAttribute('src', item.photo);

    div.append(img, name, surname, age, info);
    document.body.appendChild(div);
}

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let coursesContainerDiv = document.createElement('div');
coursesContainerDiv.classList.add('courses-container');

for (item of coursesArray) {
    let div = document.createElement('div');
    div.classList.add('course-container');

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('course-title');
    titleDiv.innerHTML = `<p><b>Title:</b> ${item.title}</p>`;

    let monthDurationDiv = document.createElement('div');
    monthDurationDiv.classList.add('course-monthDuration');
    monthDurationDiv.innerHTML = `<p><b>Month Duration:</b> ${item.monthDuration}</p>`;

    let hourDurationDiv = document.createElement('div');
    hourDurationDiv.classList.add('course-hourDuration');
    hourDurationDiv.innerHTML = `<p><b>Hour Duration:</b> ${item.hourDuration}</p>`;

    let modulesArr = item.modules

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules-container');
    let modulesHeading = document.createElement('h3')
    modulesHeading.innerText = 'Modules:'
    const ul = document.createElement('ul')

    modulesArr.forEach(el => {
        const li = document.createElement('li')
        li.classList.add('course-li')
        li.innerHTML = `<p>${el}</p>`
        ul.appendChild(li)
    })

    modulesDiv.append(modulesHeading, ul)

    div.append(titleDiv, monthDurationDiv, hourDurationDiv, modulesDiv);
    coursesContainerDiv.appendChild(div);
}

document.body.appendChild(coursesContainerDiv);