// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
    var x = str.match(/x/gi)
    var o = str.match(/o/gi)
    return (x && x.length) == (o && o.length)
}


console.log(XO('Xxxxooo'))