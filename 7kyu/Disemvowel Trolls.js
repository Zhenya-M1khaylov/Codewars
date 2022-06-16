// Your task is to write a function that takes a string and return a new string with all vowels removed.
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    let removeVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = str.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!removeVowel.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr.join('')
}

console.log(disemvowel("This website is for losers LOL!"),
    "Ths wbst s fr lsrs LL!")
