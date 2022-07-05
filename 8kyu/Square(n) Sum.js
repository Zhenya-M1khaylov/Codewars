// Complete the square sum 'function' so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {

    let square = numbers.map(n => (n ** 2)).reduce(function (a, b) {
        return a + b
    }, 0)
    return square

}

console.log(squareSum([1, 2, 3]))