async function foo() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

    console.log(users)
    console.log(posts)
}

foo()



