// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.
//
//     Assume that the input n will always be a positive integer.

function sumCubes(n){
    let res = 0
    for (let i = 0; i <= n; i++) {
        res += i ** 3
    }
    return res
}