node.childNodes.length
node.childNodes[0]
node.childNodes.item[0]

// 在catch中兼容IE
function convertToArray(nodes) {
  try {
    return Array.prototype.slice(nodes, 0)
  } catch (ex) {
    let array = []
    for (var i=0; i<nodes.length; i++) {
      array.push(nodes[i])
    }
    return array
  }
}

let nodes = document.getElementsByTagName('body')[0].childNodes
console.log(nodes instanceof Array) // false
let array = convertToArray(nodes)
console.log(array instanceof Array) // true

//e.g. 操作DOM
let pNode = document.getElementById('pNode')
let cloneBtn = document.getElementById('cloneBtn')
cloneBtn.addEventListener('click', function (e) {
  console.log('add node')
  let newPNode = pNode.cloneNode(true)
  pNode.parentNode.insertBefore(newPNode, pNode)
}, false)

console.log ( document.body == document.getElementsByTagName('body')[0]) // true

// document只有一个元素节点 html
[...document.childNodes].filter(node => node.nodeType == 1).forEach(node => {
  console.log(node.nodeName)
})

// 关于 getElementsByTagName
var divs = document.getElementsByTagName('div')
console.log(divs instanceof NodeList) // false
console.log(divs instanceof HTMLCollection) // true
console.log(divs.namedItem('myElement'))

document.getElementById
document.getElementsByName
document.getElementsByTagName

document.write(`<p>this is written directly by document object</p>`)

//如果在文档加载结束以后再写入，则会重写整个文档
window.onload = function () {
  document.write(`<p>this is written directly by document object</p>`) 
}

//
var pNode = document.getElementById('pNode')
console.log(document.getElementById('pNode') instanceof HTMLElement) // true
document.getElementById('pNode').dir = 'rtl'

//
console.log(pNode.getAttribute('id'))  //case insensitive
pNode.attributes.getNamedItem('id').nodeName //id
pNode.attributes.getNamedItem('id').nodeValue // pNode
pNode.attributes.removeNamedItem == pNode.removeAttribute

//

let div = document.createElement('div')
div.className = 'custom-style'
document.body.appendChild(div)
console.log(div.ownerDocument) // #document

//get
var div = document.getElementById('cust-div')
var allPNode = div.getElementsByTagName('p')
var allTextNode = [...div.childNodes].filter(node => node.nodeType == 3)

console.log(allPNode.length)
console.log(allTextNode.length)

//
var textNode = document.createTextNode('hello world')
div.appendChild(textNode)
var textNode2 = document.createTextNode('hello world2')
div.appendChild(textNode2)
//
div.normalize()

//DocumentFragment
var fragment = document.createDocumentFragment()
var i = 0
var node
while (i < 3) {
  node = document.createElement('li')
  node.appendChild(document.createTextNode('' + i))
  //Attribut： 第一种方式。不推荐
  var attr = document.createAttribute('title')
  attr.value = 'attr-title' + i
  node.setAttributeNode(attr)
  //第二种方式: 推荐
  node.setAttribute('id', 'id' + i)

  fragment.appendChild(node)
  i++
}
document.getElementById('list').appendChild(fragment)

//加载script
function loadFnRuntime(code) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  try {
    script.appendChild(document.createTextNode(code))
    document.body.appendChild(script)
  } catch (err) { //兼容IE
    script.text = code
    document.body.appendChild(script)
  }
}

var fn = `function test() { alert ('happy')} test()`
loadFnRuntime(fn)

//
var style = document.createElement('style')
style.styleSheet.cssText = 'xxx' //IE

