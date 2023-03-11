function getMiddle(s) {
    let wordLength = s.length
    if (wordLength % 2 != 0) {
        let word = (wordLength - 1) / 2
        return s.slice(word, word + 1)
    } else {
        let word = wordLength / 2 - 1
        return s.slice(word, word + 2)
    }
}

console.log(getMiddle("middle"))
console.log(getMiddle("testing"))