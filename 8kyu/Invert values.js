// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//     You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    return array.map(a => a * -1);
}

console.log(invert([1,2,4,7,-6,7]))