// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//
//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


function solve(str){
    let upper = 0;
    let lower = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            upper++;
        } else {
            lower++;
        }
    }
    return upper > lower ? str.toUpperCase() : str.toLowerCase();
}