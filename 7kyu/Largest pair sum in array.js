function largestPairSum (numbers) {
    let result = numbers.sort((a,b) => b - a).slice(0, 2)
    let sum = 0
    for (let item of result) {
        sum += item
    }
    return sum
}

console.log(largestPairSum([10,14,2,23,19]))