// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


let FilterString = function(value) {
    let result = "";
    for(let i = 0; i < value.length; i++){
        if(!isNaN(value[i]))
            result += value[i];
    }
    return parseInt(result);
}

console.log(FilterString('a1b4c2er2000rfg0df01'))