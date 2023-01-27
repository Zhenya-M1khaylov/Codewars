function divCon(x) {
    let num = 0
    let strNum = 0
    for (let i = 0; i < x.length; i++) {
       if (typeof x[i] === 'number') {
           strNum += x[i]
       } else {
           num -= x[i]
       }
    }
    return num + strNum
}

console.log(divCon([9, 3, '7', '3'])) // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 14