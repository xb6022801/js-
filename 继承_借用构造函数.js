function SuperType() {
  this.name = ['green', 'blue']
  SuperType.prototype.getId = function() {
    return 'super id'
  }
}

function SubType() {
  SuperType.apply(this)
  this.getLabel = function() {
      return 'sub label'
  }
}

var subInst = new SubType()
console.log(subInst.getId()) // undefined 一大问题，并不能继承父类型原型对象的方法。导致函数复用不可行。
