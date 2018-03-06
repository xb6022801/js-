// var name = 'global name'
var withObj = {}
withObj.name = 'withObj'

function fn() {
  var val = 'val',
      name = 'local name'
  with (withObj) {
    var finalVal = name + '/' +val
  }
//   var finalVal = this.name + '/' +val
  return finalVal
}

console.log(fn())