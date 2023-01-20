// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x, n) {
    let res = []
    if (n === 1) {
        return [x]
    }
    for (let i = 0; i < n - 1; i++) {
        if (i === 0) {
            res.push(x)
        }
        res.push(x *= x)
    }
    return res
}