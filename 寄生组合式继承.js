function swallowClone(obj) {
    var fn = function() {}
    fn.prototype = obj
    return new fn()
}

function SuperType(name) {
  this.name = name
  this.colors = ['green']
  SuperType.prototype.getId = function() { console.log('id')}
}

function SubType(name, age) {
	this.age = age
	SuperType.call(this, name)
}

// important
var _SuperProtoCopy = swallowClone(SuperType.prototype)
_SuperProtoCopy.constructor = SubType
SubType.prototype = _SuperProtoCopy
// end

var in1 = new SubType('xubin', 24)
in1.colors.push('black')

var in2 = new SubType('xinxiu', 25)
in2.colors.push('blue')

console.log(in2.colors)
in2.getId()
console.log(in2 instanceof SubType)
console.log(in2 instanceof SuperType)
console.log(SubType.prototype.constructor)
console.log(in2.age)
console.log(in2.name)