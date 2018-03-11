console.log(document.getElementsByTagName('ul')[0].innerHTML)

// if (document.body.msMatchesSelector())
var ul = document.querySelector('ul#list')
console.log(ul.childNodes.length) // 3
console.log(ul.childElementCount) // 1
console.log(ul.children.length) // 1

for (var i = 0; i < ul.childNodes.length; i++) {
  console.log(ul.childNodes[i])
}

var child = ul.firstElementChild
console.log(child.innerHTML) 
while (child != ul.lastElementChild) {
  console.log(child.innerHTML) 
  child = child.nextElementSibling
}


//
var lists = document.getElementsByClassName('list')
Array.from(lists).forEach(element => {
   element.setAttribute('style', 'background: green') // good
  // element.attributes.style = 'background: green' // wrong
   console.log(element.attributes.getNamedItem('style').nodeValue += ';background: blue') // good
   element.style.background = 'blue'
})

//
var newElement = document.createElement('p')
newElement.innerText ='Hello World！'
newElement.addEventListener('mouseenter', function() {
  //this.style.background = 'blue'
  this.classList.toggle('class2')
})
document.body.appendChild(newElement)

//没有classList之前，如果想删除一个class的话
function removeClass(node, cls) {
  if (!node || !cls) return
  var clsList = node.className.split(/\s+/)

  if (clsList.length == 0) return
  if (clsList.includes(cls)) {
    clsList.splice(clsList.indexOf(cls), 1)
    node.className = clsList.join(' ')
  }
}
// better way with classList
function removeClass(node, cls) {
  node.classList.remove(cls)
}

var node = document.getElementsByClassName('class1 class2')[0]
removeClass(node, 'class3')

//实测无效。need to check
if (document.readyState == 'complete') {
  console.log('document is loaded completely!')
}

//
console.log(document.characterSet)
console.log(document.charset)
console.log(document.defaultCharset) // undefined

//dataset
var elements = document.getElementsByClassName('toCheck')
Array.from(elements).forEach(e => {
  var dataName = e.dataset.name
  if (dataName == 'check') {
    e.classList.add('class2')
  }
})

//
var p = document.querySelector('.class2')
p.addEventListener('click', function() {
  document.querySelector('.class1').scrollIntoView()
})

//contains
console.log(document.documentElement.contains(document.head)) // true'
console.log(document.documentElement.contains(document.body)) // true'

function getNodeText (node) {
  return (typeof node.innerText == 'string') ?
    node.innerText : node.textContent
}

console.log(getNodeText(document.getElementById('list')))