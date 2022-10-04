// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)



function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i];
        }
    }
}

console.log(stray([3, 3, 3, 4, 3, 3]))