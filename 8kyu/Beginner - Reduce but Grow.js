// Given a non-empty array of integers, return the result of multiplying the values together in order.


const grow = (x) => x.reduce((prev, curr) => prev * curr, 1)

console.log(grow([1,2,3]))