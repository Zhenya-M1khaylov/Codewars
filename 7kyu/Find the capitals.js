// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


let capitals = function (word) {
    return word.split('')
        .map(function(l, i) {
            if (l.toUpperCase() === l) return i
        })
        .filter(function(i) {return i != null})
};