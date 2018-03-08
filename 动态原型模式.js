function Person(name, age){
  this.name = name
  this.age = age

  if (typeof this.getName != 'function') {
      Person.prototype.getName = function () {
        return this.name
      }
  }
}