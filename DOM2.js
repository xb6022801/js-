import { wrap } from "module";

console.log(document.implementation.hasFeature('css', '2.0'))

//
var node = document.querySelector('#list')
console.log(node.style.cssText) //返回设置的style属性。不返回class的赋值

//
var currentStyle
for (var i=0; i<node.style.length; i++) {
  currentStyle = node.style.item(i) // or node.style[i]
  console.log(currentStyle) // font-size: 30px
  console.log(node.style.getPropertyValue(currentStyle)) //  30px
}

console.log(typeof CSSStyleDeclaration)

//
var node = document.querySelector('#list')
var nodeStyle = document.defaultView.getComputedStyle(node, null)
console.log(nodeStyle.fontSize)
console.log(nodeStyle.width)
console.log(nodeStyle.align)

//
console.log(document.styleSheets.length) //样式表数量
if (document.styleSheets.length > 0) {
  console.log(document.styleSheets[0].href) // style元素包含第没有href属性
}

//兼容
function getStyleSheet(element) {
  return element.sheet || element.styleSheet
}

//
var node = document.querySelector('#list')
console.log(node.offsetLeft)
console.log(node.offsetTop)
console.log(node.offsetWidth)
console.log(node.offsetHeight)

//
var node = document.querySelector('#list li')
function getElementOffsetLeft(element) {
  var offsetL = element.offsetLeft
  var parent = element.offsetParent

  while (parent != null) {
    offsetL += parent.offsetLeft
    parent = parent.offsetParent
  }
  return offsetL
}

console.log(node.offsetLeft)
console.log (getElementOffsetLeft(node))

//
console.log(document.documentElement.clientWidth)
console.log(document.body.clientWidth)

console.log(document.body.offsetHeight)
console.log(document.body.clientHeight)
console.log(document.body.scrollHeight)

//style: height 100px border: 3px, 里面包括一个300px高的元素
var container = document.querySelector('.container')
console.log(container.scrollTop)

container.addEventListener('scroll', function() {
  console.log(container.scrollTop) // changing
  console.log('scroll height = ' + container.scrollHeight) // 300px （实际内容高度）
  console.log('client height = ' +container.clientHeight) // 100px （可视区域高度）
  console.log('container height = ' +container.offsetHeight) // 106px （可视区域高度+border）
})

console.log(document.documentElement.getBoundingClientRect())
console.log(document.compatMode) //CSS1Compact 标准模式

console.log(typeof document.createNodeIterator) // function
console.log(typeof document.createTreeWalker) // function

//NodeIterator 遍历
var container = document.querySelector('.container')
var filter = {
  acceptNode: function (node) {
    if (node.tagName.toLowerCase() == 'li' || node.classList.contains('listStyle')) {
      return NodeFilter.FILTER_ACCEPT
    } else {
      return NodeFilter.FILTER_SKIP
    }
  }
}

var itr = document.createNodeIterator(container, NodeFilter.SHOW_ELEMENT, filter, false)
var nextNode = itr.nextNode()

while (nextNode != null) {
  console.log(nextNode.innerHTML)
  nextNode = itr.nextNode()
}

//TreeWalker
var container = document.querySelector('.container')
var filter = {
  acceptNode: function (node) {
    if (node.tagName.toLowerCase() == 'li' || node.classList.contains('listStyle')) {
      return NodeFilter.FILTER_ACCEPT
    } else {
      return NodeFilter.FILTER_SKIP
    }
  }
}

var walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, filter, false)
console.log(walker.firstChild()) //根据当前遍历的节点实时更新
var nextNode = walker.nextNode()

console.log(walker)
while (nextNode != null) {
  console.log(nextNode.innerHTML)
  nextNode = walker.nextNode()
}

console.log(walker.firstChild())

//
/**
 .container
  .wraper content
  p this is a p element
  span.listStyle span element
  ul#list
    li list node 1
    li list node 2
    li list node 3
 */
var range1 = document.createRange()
var range2 = document.createRange()

range1.selectNode(document.getElementById('list'))
range2.selectNodeContents(document.getElementById('list'))
console.log(range1.startContainer == document.getElementsByClassName('container')[0]) // true
console.log(range1.endOffset) // 0
console.log(range1.startOffset) //3
