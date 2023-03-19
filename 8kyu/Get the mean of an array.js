function getAverage(marks){
    let sum = 0
    for (num of marks) {
        sum += num
    }
    return Math.floor(sum / marks.length)
}