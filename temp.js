<<<<<<< HEAD
// function fn1() {
//   console.log(name)
// }

// function fn2() {
//    name = 'yes'
// }

// fn2()
// fn1()

// var color = 'green'

// var fn =function() {
// //   this.color = 'blue'
//   console.log(this.color)
// }

// var globalObj = { color: 'grey' }
// fn.apply(globalObj)

// function MyClass() {
//   this.name = 'happy'
// }

// var obj = new MyClass()
// // console.log(obj.name)
// var log = console.log.bind(console)
// log(obj.name)

var array = [1, 3, 3, 5, 2, 2, 7, 8]

// [...new HashSet(array)].sort((a, b) => {
//   return a - b
// })
// array.forEach(e => {
//   if (array.indexOf(e) != array.lastIndexOf(e))
//     delete array[array.indexOf(e)]
// })

// array = array.filter( (e) => {
//   return array.lastIndexOf(e) <= array.indexOf(e)
// })

console.log(array)

var obj = { gender: 'male' }
Object.defineProperty(obj, 'name', {
  writable: false,
  enumerable: false,
  value: 'binbin'
})

console.log(obj.name)
for ( key in obj ) {
  console.log(key)
  console.log(obj[key])
}

function person(name, gender) {
  this.name = name
  this.gender = gender
}

var newPerson = new person('xubin', 'male')
=======
function Cache() {
    this.store = {}
  }
  
  Cache.prototype.new = function(name, fn) {
    if (!name || !fn || typeof fn !== 'function')
      return
    this.store[name] = { name, fn, data: {} }
  }
  
  Cache.prototype.get = function(name, key) {
    let instance = this.store[name]
    key = key || 1
    if (instance.data[key]) {
      return Promise.resolve(instance.data[key])
    } else {
      instance.fn(key).then(data => {
        instance.data[key] = data
        return data
      })
    }
  }
  
  const c = new Cache()
  
  c.new('foo', function(key) {
      return Promise.resolve([1])
  })
  
  console.log(c.get('foo'))
  
  c.get('foo').then(data => {
    data.push(2)
    return c.get('foo')
  }).then(data => {
    console.log(data)
  })
  
>>>>>>> fd66cf260fba2f3ac2f3891c67c0a87f85459341
