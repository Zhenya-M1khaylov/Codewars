function evenNumbers(array, number) {
    let res = []
    array.map(num => {
        if (num % 2 === 0) {
            res.push(num)
        }
        }
    )

    return res.splice(-number)
}