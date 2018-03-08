function SuperType() {
  this.colors = ['green', 'blue']
	SuperType.prototype.getSuperProperty = function() {
	    return 'super property'
	}
}

function SubType () {
  SuperType.call(this) // 在实例上建立colors，屏蔽原型上的colors，做到子类型独立。
}

SubType.prototype = new SuperType() //继承父类型的原型方法

 
var ins1 = new SubType()
ins1.colors.push('black')
console.log(ins1.colors)

var ins2 = new SubType()
console.log(ins2.colors)
console.log(ins2.getSuperProperty())
