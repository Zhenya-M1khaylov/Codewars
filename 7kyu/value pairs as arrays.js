function keysAndValues(data) {
    let keys = []
    let values = []
    for (let key in data) {
        keys.push(key)
        values.push(data[key])
    }
    return [keys, values]
}