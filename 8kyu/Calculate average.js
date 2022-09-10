// Write a function which calculates the average of the numbers in a given list.
//
//     Note: Empty arrays should return 0.


function find_average(array) {
    if (array.length) {
        sum = array.reduce((prev, cur)=>prev + cur, 0)
        return sum / array.length
    } else {
        return 0;
    }
}

console.log(find_average([1,4,9,6]))