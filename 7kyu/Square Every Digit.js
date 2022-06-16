function squareDigits(num) {
    let res = "";
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        res = res + (num[i] * num[i]).toString();
    }
    return Number(res)
}

console.log(squareDigits(3213))