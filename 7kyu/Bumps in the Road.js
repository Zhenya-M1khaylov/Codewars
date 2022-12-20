function bump(x) {
    let count = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'n') {
            count++
        }
    }
    return count <= 15 ? "Woohoo!" : "Car Dead"
}

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"))
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))