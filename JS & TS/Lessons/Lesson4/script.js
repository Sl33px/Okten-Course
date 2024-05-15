function calculator(a, b) {
    return a + b
}

let x = calculator(20, calculator(100, 200))
console.log(x)

function sq2() {
    if (arguments.length === 2) {
        return arguments[0] * arguments[1]
    } else if (arguments.length === 3) {
        return arguments[0]*arguments[1]*arguments[2]
    }
}

console.log(sq2(3, 4))
console.log(sq2(2, 3, 4))