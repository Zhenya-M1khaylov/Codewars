// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.


function sum (numbers) {
    "use strict";
    let arr = numbers.reduce((pr,cur)=>pr+cur, 0)
    if (arr === []) {
        return 0
    } else {
        return arr
    }
};

console.log(sum([1,4,9]))