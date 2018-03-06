// var factorial = function (num) {
//   if (num <= 1)
//     return num
//   else
//     return num * arguments.callee(num - 1)
// }

//命名函数
var factorial = (function f(num) {
  if (num <= 1)
    return num
  else
    return num * f(num - 1)
})

console.log(factorial(3))

var another = factorial
factorial = null
console.log(another(3))