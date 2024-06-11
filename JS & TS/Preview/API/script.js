fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const {name,username} of users) {
            document.write(`
            <div class="user">${name} ${username}</div>
        `)
        }
    })

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let {products} = data

        document.write(`<div>`)
        for (const product of products) {
            document.write(`<div>`)
            document.write(`<p>${product.brand} - ${product.price}</p>`)
            document.write(`<img src="${product.thumbnail}" alt="img">`)
            document.write(`</div>`)
        }
        document.write(`</div>`)
    })

let url = new URL('https://jsonplaceholder.typicode.com/posts')
url.searchParams.set('userId', 8)
url.searchParams.set('asd', 'dgsafasdfasdf')
console.log(url.searchParams.get('asd'))

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))