// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     if (number % 2 === 0) {
//         return number * 8
//     } else {
//         return number * 9
//     }
// }

function simpleMultiplication(number){
    return number % 2 ? number *9 : number *8
}

console.log(simpleMultiplication(8))
console.log(simpleMultiplication(9))