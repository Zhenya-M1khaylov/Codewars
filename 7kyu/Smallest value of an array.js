function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
}


console.log(min([1, 2, 3, 4, 5], 'value'))
console.log(min([1, 2, 3, 4, 5], 'index'))
console.log(min([333, 444, 555, 666, 777], 'value'))
console.log(min([333, 444, 555, 666, 777], 'index'))