var color = 'green'

function fn() {
//   var color
  console.log(this)
  this.color = 'blue'
}

fn()
console.log(color)

///
var color = 'green'

function changecolor() {
  var another = 'blue'
  var temp = another
  another = color
  color = temp
}

changecolor()

console.log(color)