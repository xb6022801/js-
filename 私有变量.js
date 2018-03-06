function fn() {
  function privateFn() {
    var id = Math.random() +0.5
    return id
  }

  this.getId = function() {
    return privateFn()
  }
}

var obj = new fn()
var obj2 = new fn()
console.log(obj.getId())
console.log(obj2.getId())