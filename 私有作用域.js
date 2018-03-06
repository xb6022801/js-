// function fn(count) {
//   var ret = []
//     for (var i=0; i<count; i++) {
//      (function (i) {
//         setTimeout(() => {
//           console.log(i) 
//         }, 0);
//      })(i)
//     } 
//   }

// console.log(fn(3))

(function () {
  var now = new Date()
  console.log(now.getMonth())
})()

console.log(typeof now == 'undefined') // true