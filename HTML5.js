//http://parent.org
const contentWindow = document.getElementById('fIframe').contentWindow

contentWindow.postMessage('Hello, world', 'http://example.org')
window.addEventListener('message', function() {
  origin = event.origin || event.orginalEvent.origin
  if (event.origin === 'http://example.org') {
    event.source.postMessage('received from example!', event.origin)
  }
})

//http://example.org
window.addEventListener('message', function() {
  origin = event.origin || event.orginalEvent.origin
  if (origin === 'http://parent.org') {
    event.source.postMessage('received from parent!', origin)
  }
})

//
var menuContainer = document.querySelector('.menuContainer')
menuContainer.addEventListener('dragstart', function() {
  event.dataTransfer.effectAllowed = 'copy'
  console.log(event.dataTransfer.effectAllowed)
  event.target.classList.add('dragging')
  event.dataTransfer.setData('text', 'Hello, World!')
})

menuContainer.addEventListener('dragend', function() {
  event.target.classList.toggle('dragging')
})


//将目标设置成可放置目标
var target = document.getElementById('dropTarget')
target.addEventListener('dragenter', function() {
  event.preventDefault()
  event.dataTransfer.dropEffect = 'copy'
  console.log(event.dataTransfer.dropEffect)
})
target.addEventListener('dragover', function() {
  event.preventDefault()
})
target.addEventListener('drop', function() {
  var target = event.target || event.srcElement
  if (target.innerText) {
    target.innerText = event.dataTransfer.getData('Text')
  } else {
    target.textContent = event.dataTransfer.getData('Text')
  }
})


//
