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

