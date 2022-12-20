// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
    return [].concat(...array).sort((a, b) => a - b)
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))