function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc, num) => acc + num, 0)
    let points = sum / classPoints.length
    return true ? points < yourPoints : false
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))