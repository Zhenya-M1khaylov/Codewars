// Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
    let sum = array.reduce((prev, curr) => prev + curr, 0)
    if (sum.length === 0) return 'even'
    return sum % 2 === 0 ? 'even' : 'odd'
}