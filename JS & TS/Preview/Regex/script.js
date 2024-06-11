let form = document.forms[0]
form.onsubmit = function(e) {
    e.preventDefault()
    let userId = this.userId.value
    // userId.match(//g)
    let title = this.title.value
    let body = this.body.value
    console.log(userId, title, body)
}