let btn = document.getElementById("btn");
let input = document.getElementById("input");
let f1 = document.forms.f1
// btn.onclick = function(e){
//     e.target.classList.toggle("dark");
// }

// btn.addEventListener("click", function(e){
//     e.target.classList.toggle("dark");
// })
//
// btn.addEventListener("click", function(e){
//     console.log('hello')
// }, true)

// input.oninput = function (e) {
//     console.log(this.value)
//     btn.style.backgroundColor = this.value
// }
//
// input.onkeyup = function (e) {
//     console.log('up')
// }

f1.onsubmit = function (e) {
    e.preventDefault();
    let username = f1.username.value
    let surname = f1.surname.value
    let obj = {username, surname}

    let usersFromStorageArr = localStorage.getItem("users");
    if (!usersFromStorageArr) {
        localStorage.setItem("users", JSON.stringify([]));
    }
    let usersArr = JSON.parse(usersFromStorageArr);
    usersArr.push(obj);
    localStorage.setItem("users", JSON.stringify(usersArr));
}