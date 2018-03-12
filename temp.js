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