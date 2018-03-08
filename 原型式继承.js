function swallowClone(obj) {
    var fn = function() {}
    fn.prototype = obj
    return new fn()
}

var obj = {
    colors: ['green']
}

var inst1 = swallowClone(obj)
inst1.colors.push('black')

var inst2 = swallowClone(obj)
inst2.colors.push('blue')

console.log(obj.colors)
console.log(inst1.colors)
console.log(inst2.colors)

// function Person() {
//   this.colors = ['green']
// }

// function swallowClone(fn1) {
//     var fn = function() {}
//     fn.prototype = fn1.prototype
//     fn.prototype.
//     return new fn()
// }
