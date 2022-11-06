// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).


function minValue(values){
    const n = +[...new Set(values)].sort().join('')
    return n
}