// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    let result = numbers.sort((a, b) => a - b).slice(0, 2);

    let sum = 0;
    for(let i = 0; i < result.length; i++){
        sum += result[i];
    }
    return sum;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

