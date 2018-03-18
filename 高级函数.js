var btn = document.querySelector('button')
btn.addEventListener('click', function() {
  history.pushState({'name': 'Nicolas'}, '', 'index1.html')
})


//函数高级技巧
function isArray(value) {
  return Object.prototype.toString.call(value) == '[object Array]'
}

function isFunction(value) {
  return Object.prototype.toString.call(value) == '[object Function]'
}

function isRegExp(value) {
  return Object.prototype.toString.call(value) == '[object RegExp]'
}

var val = [1, 2, 3, 4]
console.log(isArray(val)) // true

//确定是否为原生JSON
var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON) == '[object JSON]'

//安全作用域的构造函数
function Person(name) {
  this.name = name
}

var globalPerson = Person('Nicolas')
console.log(globalPerson.name) // undefined
console.log(this.name) // Nicolas

//安全作用域的继承构造函数
function Polygon(side) {
  if (this instanceof Polygon) {
    this.side = side
  } else {
    return new Polygon(side)
  }
}

function Rectangle(width, height) {
  Polygon.call(this, 2) //这个this instanceof Ploygon = false, 所以Rectangle的side并没有被assign
  this.width = width
  this.height = height
}

Rectangle.prototype = new Polygon() //加上这行，成功执行 Polygon.call(this, 2)

var newRectangcle = new Rectangle(200, 300)
console.log(newRectangcle.side) // undefined | 2

//惰性载入函数： 方案1
function createXHR() {
  if (typeof XMLHttpRequest != 'undefined') {
    createXHR = function() {
      return new XMLHttpRequest()
    }
  } else if (typeof ActiveXObject != 'undefined') {
    createXHR = function() {
      /* to do */
    }
  } else {
    createXHR = function() {
      throw new Error('NO XHR OBJECT AVAILABLE！')
    }
  }
}

//惰性载入函数： 方案2
var createXHR = (function() {
  if (typeof XMLHttpRequest != 'undefined') {
    return function() {
      return new XMLHttpRequest()
    }
  } else if (typeof ActiveXObject != 'undefined') {
    return function() {
      /* to do */
    }
  } else {
    return function() {
      throw new Error('NO XHR OBJECT AVAILABLE！')
    }
  }
})()

//函数绑定
var handler = {
  message: 'event handled!',
  handleClick: function(event) {
    console.log(this.message +':' + event.type)
  }
}

var btn = document.getElementById('btn')

//原声bind
btn.addEventListener('click', handler.handleClick.bind(handler))
// 或者
//自己实现的bind
function custBind(context, fn) {
  return function() {
    return fn.apply(context, arguments)
  }
}

btn.addEventListener('click', custBind(handler, handler.handleClick))

//function currying
function currying(fn) {
  var args = Array.prototype.slice.call(arguments, 1) //得到外部函数所有参数，除去第一个fn
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments) //得到所有内部参数
    var finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs)
  }
}
//or
function curryingWithContext(fn, context) {
  var args = Array.prototype.slice.call(arguments, 2) //得到外部函数所有参数，除去第一个fn和第二个参数context
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments) //得到所有内部参数
    var finalArgs = args.concat(innerArgs)
    return fn.apply(context, finalArgs)
  }
}

function add(n1, n2) {
  console.log(n1 + n2)
}

var curryedFn = currying(add)
curryedFn(2, 4) // 6

var curryedFn2 = currying(add, 4)
curryedFn2(5) // 9

//函数柯里化 es5中的bind也实现了 柯里化
var handler = {
  message: 'event handled!',
  handleClick: function(name, clickedBy, event) {
    console.log(this.message +':' + name + ':' + event.type + ' clicked by ' + clickedBy)
  }
}
var btn = document.getElementById('btn')
btn.addEventListener('click', handler.handleClick.bind(handler, 'my-button', 'xubin'))
// or
btn.addEventListener('click', curryingWithContext(handler.handleClick, handler, 'my-button', 'xubin'))

//
var object = {
  age: 21
}
Object.preventExtensions(object)
object.gender = 'male'

console.log(object.gender) //undefined

//
function UnExtensibleObject(age) {
  if (this instanceof UnExtensibleObject) {
    this.age = age
    // Object.preventExtensions(this)
    Object.seal(this)
  } else {
    return new UnExtensibleObject()
  }
}

var newUnExtensibleObj = new UnExtensibleObject(21)
newUnExtensibleObj.gender = 'male'
console.log(newUnExtensibleObj.age) //21
console.log(newUnExtensibleObj.gender) //undefined

newUnExtensibleObj.age ++
console.log(newUnExtensibleObj.age) //22 修改或者删除已有方法不受影响
delete newUnExtensibleObj.age
console.log(newUnExtensibleObj.age) // undefined | 22 (if Object.seal())
console.log(Object.isExtensible(newUnExtensibleObj)) // false
console.log(Object.isSealed(newUnExtensibleObj)) // true

Object.freeze(object)
Object.isFrozen(object)

//高级计时器
function custTimeout(interval) {
  return setTimeout(function() {
    console.log('executed')
    setTimeout(arguments.callee, interval)
  }, interval)
}

custTimeout(200)

//大量数据时如此处理，防止堵塞，给其他浏览器事件以处理的机会。
function chunk(interval, data, fn, context) {
  setTimeout(function() {
    var currentData = data.shift()
    if (currentData != null) {
      fn.call(context, currentData) 
    }
    if (data.length > 0) {
      setTimeout(arguments.callee, interval)
    }
  }, interval)
}

var data = [1, 22, 42, 2, 443]

var displayData =function (data) {
  var container = document.querySelector('.container')
  container.innerHTML = '<p>curren item is ' + data+'</p>'
}

// chunk(data.concat(), displayData)
var curryedChunk = currying(chunk, 200)
curryedChunk(data.concat(), displayData)


//debounce
var processor = {
  timer: null,
  handleResize: function() {
    console.log('resize')
  },
  process: function() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(this.handleResize, 1000)
  }
}

processor.process()

var btn = document.querySelector('.btn')
btn.addEventListener('click', processor.process.bind(processor))
// btn.addEventListener('click', processor.process())

//自定义事件
function EventTarget() {
  this.handlers = []
}

EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function (type, handler) {
    if (typeof this.handlers[type] == 'undefined') {
      this.handlers[type] = []
    }
    this.handlers[type].push(handler)
  },
  fire: function(event) {
    if (!event.target) {
      event.target = this
    }
    if (this.handlers[event.type] instanceof Array) {
      this.handlers[event.type].forEach(handler => {
        handler(event)
      })
    }
  },
  removeHandler: function(type, handler) {
    if (this.handlers[type]) {
      var index = this.handlers[type].findIndex(e => e == handler)
      this.handlers[type].splice(index, 1)
    }
  }
}

// var eventTarget = new EventTarget()

function sendMessage(event) {
  console.log('hello, ' + event.name)
}

// eventTarget.addHandler('sayHi', sendMessage)
// eventTarget.fire({type: 'sayHi', name: 'say hi event'})


function Person() {
  EventTarget.call(this)
}

Person.prototype = new EventTarget()
Person.prototype.sayHi = function() {
  this.fire({type: 'message', name: 'send message event'})
}

console.log(EventTarget.prototype.sayHi) // undefined

var person = new Person()
person.addHandler('message', sendMessage)

person.sayHi() // hello, send message event
