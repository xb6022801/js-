function hasPrototypeProperty(obj, attr) {
  return !obj.hasOwnProperty(attr) && (attr in obj)
}

function Obj() {
  this.name = 'obj_name'
}

Obj.prototype.age = 22

var obj = new Obj()

Object.defineProperty(obj, 'gender', {
  enumerable: false,
  value: 'male'
})

console.log(Object.getOwnPropertyDescriptor(obj, 'gender'))
console.log(Object.getOwnPropertyNames(obj)) //name, gender
console.log(Object.keys(obj)) // name
console.log('.....')
for(key in obj) {
  console.log('key: ' + key) //name, age
}
