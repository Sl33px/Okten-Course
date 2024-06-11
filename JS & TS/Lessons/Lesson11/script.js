// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((asd) => asd.json())
//     .then((users) => {
//         for (const {name,username,email} of users) {
//             document.write(`<div>
//                 ${name} ${username}
//             </div>`)
//
//         }
//     });

// fetch('https://dummyjson.com/products?limit=10')
//     .then(value => value.json())
//     .then(res => {
//         console.log(res);
//         let {products} = res;
//
//         document.write(`<div>`);
//         for (const product of products) {
//             document.write(`<div>`);
//             document.write(`<p>${product.id}___ ${product.brand} - ${product.price}</p>`);
//             document.write(`<img src="${product.thumbnail}" alt="">`)
//             document.write(`</div>`);
//         }
//         document.write(`</div>`);
//
//
//     });
//
//
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//     })
// })
//     .then(res => res.json())
//     .then(value => console.log(value));


let form = document.forms[0];
form.onsubmit = function (ev) {
    ev.preventDefault();
    let userId = this.userId.value;
    let title = this.title.value;
    let body = this.body.value;

    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));


    }


};