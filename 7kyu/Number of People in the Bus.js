let number = function(busStops){
    let count = 0
    for (let drop of busStops) {
        count += drop[0] - drop[1]
    }
    return count
}