let humanYearsCatYearsDogYears = function(humanYears) {
    if (humanYears <= 2)
        return [humanYears, 6 + 9 * humanYears, 6 + 9 * humanYears]
    else
        return [humanYears, 16 + 4 * humanYears, 14 + 5 * humanYears]
}


console.log(humanYearsCatYearsDogYears([2, 1, 3]))