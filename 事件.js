var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler)
    } else if (element.attachEvent) {
      element.attachEvent(type, handler)
    } else {
      element['on' + type] = handler
    }
  },
  getEvent: function() {
    return event ? event : window.event
  },
  getTarget: function() {
    return this.getEvent().target || this.getEvent().srcElement
  }
}

event.stopPropagation // 阻止捕获或者冒泡

document.body.addEventListener('click', function (event) {
  console.log(event.target == this) // false
  console.log(event.currentTarget == this) // true
  console.log(event.target == document.getElementById('btn')) // true
  console.log(event.eventPhase) // 3: 冒泡
})

//
var container = document.querySelector('.container')
container.addEventListener('scroll', function() {
  console.log('???')
})

//test mouseleave, mouseout区别： 冒泡
var container = document.querySelector('.container')
var wraper = document.querySelector('.wraper')
var fn = function(event) {
  console.log(event.target)
}

container.addEventListener('mouseout', function() {
  console.log('container mouseout')
})
container.addEventListener('mouseover', function() {
  console.log('container mouseover')
})
wraper.addEventListener('mouseout', function() {
  console.log('wraper out')
})

//
document.documentElement.addEventListener('mousemove', function(e) {
  console.log('client: ' + e.clientX +', ' + e.clientY)
  console.log('page: ' + e.pageX +', ' + e.pageY)
  console.log('screen: ' + e.screenX +', ' + e.screenY)
  console.log(e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
})

document.querySelector('input[type="text"]').addEventListener('textInput', function() {
  console.log(event.data)
})

//TEST 变动事件
var ul = document.querySelector('ul')
ul.parentNode.addEventListener('DOMSubtreeModified', function() {
  console.log(event)
})
ul.parentNode.removeChild(ul)

//contextmenu事件
var ul = document.querySelector('ul')
var container = document.querySelector('.menuContainer')

ul.style.visibility = 'hidden'

container.addEventListener('contextmenu', function() {
  event.preventDefault()
  ul.style.top = event.clientY + 'px'
  ul.style.left = event.clientX + 'px'
  ul.style.visibility = 'visible'
})

document.addEventListener('click', function() {
  ul.style.visibility = 'hidden'
})

var handler = function (event) {
  console.log(event)
}
window.addEventListener('deviceorientation', handler)
window.addEventListener('orientationchange', handler)
window.addEventListener('devicemotion', handler)

//事件委托
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('menuContainer')) {
    console.log('menuContainer')
  } 
  else if (e.target.tagName.toLowerCase() === 'ul') {
    console.log('ul')
  }
  else if (e.target.tagName.toLowerCase() === 'li') {
    console.log('li')
  }
})

//模拟鼠标事件
var clickEvent = document.createEvent('MouseEvents')
clickEvent.initMouseEvent('click', true, true, document.defaultView)
document.querySelector('.menuContainer').dispatchEvent(clickEvent)