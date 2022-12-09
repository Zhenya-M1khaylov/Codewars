let isAnagram = function(test, original) {
    let testStr = test.toLowerCase().split('').sort().join('')
    console.log(testStr)
    let originalStr = original.toLowerCase().split('').sort().join('')
    console.log(originalStr)

    if (testStr === originalStr) {
        return true
    } else {
        return false
    }
};


console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))