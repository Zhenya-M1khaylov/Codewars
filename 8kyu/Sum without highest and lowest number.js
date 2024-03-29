// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0


function sumArray(array) {
    if (array && array.length > 1) {
        const sortedArray = array.sort((a, b) => a - b).slice(1, -1)
        return sortedArray.reduce((acc, cur) => acc + cur, 0)
    } else {
        return 0
    }
}

console.log(sumArray([1, 2, 3, 4, 5]))