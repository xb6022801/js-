function Person() {
  this.name = 'xubin'
}

Person.prototype.gender = 'male'

function createPerson() {
  var obj = new Object()
  obj.name = 'xinxiu'
  
  return obj
}

var obj1 = new Person()
var obj2 = createPerson()

console.log(obj1 instanceof Person) //true
console.log(obj2 instanceof Person) //false
console.log(obj1.constructor.name == '[Function: Person]')
console.log(typeof obj1.constructor)
console.log(obj1.constructor == Person)

console.log(Person.prototype.isPrototypeOf(obj1)) //true
console.log(Object.getPrototypeOf(obj1))
console.log(obj1.hasOwnProperty('gender')) //false