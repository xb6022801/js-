function SuperType() {
	SuperType.prototype.getSuperProperty = function() {
	    return 'super property'
	}
}


function SubType () {
}

SubType.prototype = new SuperType() 

SubType.prototype.getSubProperty = function() {
    return 'sub property'
} 

 

var subType = new SubType()
console.log(subType.constructor) // SuperType
console.log(subType instanceof SubType) //true
console.log(subType instanceof SuperType) //true
console.log(subType.getSubProperty()) // good
console.log(subType.getSuperProperty()) //good
console.log(SubType.prototype.isPrototypeOf(subType)) //true

console.log('------------------------------')

var superType = new SuperType()
try {
	console.log(superType.getSubProperty()) //undefined
} catch (err) {
	console.log(typeof err)
}
