// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are strictly positive numbers.

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}

console.log(isDivisible(3,1,3))