function removeSmallest(numbers) {
    let copyArr = numbers.slice(0)
    let smallValueOfArr = numbers.indexOf(Math.min(...numbers))
    copyArr.splice(smallValueOfArr, 1)
    return copyArr
}

console.log(removeSmallest([[1, 2, 3, 4, 5]]))