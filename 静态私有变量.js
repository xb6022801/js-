(function () {
  var name = ''
  
  //没有用var，Obj变成全局变量，外部可以调用。
  Obj = function (value) {
      name = value
  }

  Obj.prototype.setName = function (value) {
    name = value
  }

  Obj.prototype.getName = function () {
    return name
  }
})()

var p1 = new Obj('nicolas')
var p2 = new Obj('mickel')
console.log(p1.getName()) // name属性被所有实例共享。