var number = function (array) {
    return array.map((str, index) => {
        return `${index + 1}: ${str}`
    })
}