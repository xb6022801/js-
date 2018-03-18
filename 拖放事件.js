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

//拖放事件
var DragDrop = function() {
  var dragDrop = new EventTarget() // 添加自定义事件
  var dragging = null
  var diffX
  var diffY
  var eventQuene = ['mousedown', 'mousemove', 'mouseup']

  function handleEvent(event) {
    switch(event.type) {
      case 'mousedown':
        dragging = event.target
        diffX = event.clientX - event.target.offsetLeft
        diffY = event.clientY - event.target.offsetTop
        dragDrop.fire({
          type: 'dragstart',
          target: event.target,
          x: event.clientX,
          y: event.clientY
        })
        break
      case 'mousemove':
        if (dragging != null) {
          event.target.style.left = (event.clientX - diffX) + 'px'
          event.target.style.top = (event.clientY - diffY) + 'px'
          dragDrop.fire({
            type: 'dragging',
            target: event.target,
            x: event.clientX,
            y: event.clientY
          })
        }
        break
      case 'mouseup':
        dragDrop.fire({
          type: 'dragend',
          target: event.target,
          x: event.clientX,
          y: event.clientY
        })
        dragging = null
        break
    }
  }

    dragDrop.enable = function(target) {
      eventQuene.forEach(e => target.addEventListener(e, handleEvent))
    }
    dragDrop.disable = function(target) {
      eventQuene.forEach(e => target.removeEventListener(e, handleEvent))
    }
    return dragDrop
}()

var container = document.querySelector('.container')
var monitor = document.querySelector('.monitor')

DragDrop.enable(container);

['dragstart', 'dragend', 'dragging'].forEach(name => {
  DragDrop.addHandler(name, function(e) {
    monitor.innerText = '当前事件 ：' + e.type +', 坐标: ' + e.x + ':' + e.y
  })
})
