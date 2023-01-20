// function calculate(num1, operation, num2) {
//     if (Math.sign(num1) === Math.sign(num2) && operation === '/') {
//         return Math.abs(num1) / Math.abs(num2)
//     }
//     if (operation === '*') {
//         return num1 * num2
//     }
//     if (operation === '+') {
//         return num1 + num2
//     }
//     if (operation === '-') {
//         return num1 - num2
//     }
//     if (operation === '/' && num2 > 0) {
//         return num1 / num2
//     } else {
//         return null
//     }
//     if (operation !== '+' || '-' || '/' || '*') {
//         return null
//     }
// }
function calculate(num1, operation, num2) {
    if (operation !== '*' &&  operation !== '+' &&  operation !== '-' && num2 === 0) return null
    else
        switch (operation) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '/': return num1 / num2;
            case '*': return num1 * num2;
        }
}

console.log(calculate(-3,"/", 0))
console.log(calculate(3.2,"+", 8))
console.log(calculate(-3,"w", 0))
console.log(calculate(3.2,"/", 8))
console.log(calculate(3.2,"*", 8))
console.log(calculate(-2,"/", -2))
