let usersContainer = document.getElementById('users-container')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
    for(let user of users) {
        let div = document.createElement('div')
        div.classList.add('user-container')
        div.innerHTML = `
        <p><b>ID:</b> ${user.id}</p>
        <p><b>Name:</b> ${user.name}</p>
        `
        usersContainer.append(div)

        div.addEventListener('click', () => window.open(`user-details.html?id=${user.id}`, '_blank'))
    }
})
.catch(error => console.error('Error getting users:', error));

document.body.appendChild(usersContainer)