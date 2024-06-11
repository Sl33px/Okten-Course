// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(data => {
//         data['carts'].forEach(item => {
//             const container = document.createElement('div');
//             container.classList.add('cart');
//
//             for (let key in item) {
//                 const property = document.createElement('div');
//                 property.classList.add('property');
//
//                 if (typeof item[key] === 'object') {
//                     property.textContent = `${key}:`;
//                     const nestedContainer = document.createElement('div');
//                     nestedContainer.classList.add('nested');
//                     iterateNestedObject(item[key], nestedContainer);
//                     property.appendChild(nestedContainer);
//                 } else {
//                     property.textContent = `${key}: ${item[key]}`;
//                 }
//
//                 container.appendChild(property);
//             }
//
//             document.body.appendChild(container);
//         });
//     });
//
// function iterateNestedObject(obj, container) {
//     for (let nestedKey in obj) {
//         const nestedItem = document.createElement('div');
//         nestedItem.classList.add('nested-item');
//         if (typeof obj[nestedKey] === 'object') {
//             nestedItem.textContent = `${nestedKey}:`;
//             const nestedContainer = document.createElement('div');
//             nestedContainer.classList.add('nested');
//             iterateNestedObject(obj[nestedKey], nestedContainer);
//             nestedItem.appendChild(nestedContainer);
//         } else {
//             nestedItem.textContent = `${nestedKey}: ${obj[nestedKey]}`;
//         }
//         container.appendChild(nestedItem);
//     }
// }

// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        const recipesContainer = document.getElementById('recipesContainer');

        data['recipes'].forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const title = document.createElement('h2');
            title.textContent = recipe.title;
            recipeDiv.appendChild(title);

            const ingredientsTitle = document.createElement('h3');
            ingredientsTitle.textContent = 'Інгредієнти:';
            recipeDiv.appendChild(ingredientsTitle);

            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
            recipeDiv.appendChild(ingredientsList);

            const instructionsTitle = document.createElement('h3');
            instructionsTitle.textContent = 'Інструкції:';
            recipeDiv.appendChild(instructionsTitle);

            const instructions = document.createElement('p');
            instructions.classList.add('instructions');
            instructions.textContent = recipe.instructions;
            recipeDiv.appendChild(instructions);

            recipesContainer.appendChild(recipeDiv);
        });
    })
    .catch(error => console.error('Помилка отримання даних:', error));


// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
