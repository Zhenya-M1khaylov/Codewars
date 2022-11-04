function countPositivesSumNegatives(input) {
    if (input && input.length) {
        let positiveNum = 0
        let negativeSum = 0
        input.forEach(num => num > 0 ? positiveNum++ : negativeSum += num)
        return [positiveNum, negativeSum]
    } else {
        return []
    }
}