function solve(arr) {
    let newArr = arr.slice().filter((n, i) => arr.indexOf(n) !== i)
    for(let i = 0; i< newArr.length; i++){
        arr.splice(arr.indexOf(newArr[i]), 1)
    }
    return arr
}

console.log(solve([3,4,4,3,6,3])) //4,6,3
console.log(solve([1,2,1,2,1,2,3])) //1,2,3
