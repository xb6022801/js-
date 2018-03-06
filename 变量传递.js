function fn(obj) {
    obj.name = "change"
}

var obj = { name: 'static' }
fn(obj)

console.log(obj.name) // change
console.log(fn instanceof Object) //true