function sum() {
    let res = 0
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i]
    }
    return res
}

console.log(sum(12, 1, 1, 1, 1, 1, 1))
