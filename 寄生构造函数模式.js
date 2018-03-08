function createArray () {
    var values = new Array()
    values.push.apply(values, arguments)
    values.toPipeString = function () {
        return this.join('|')
    }
    return values
  }
  
  var newInstance = new createArray('ni', 'hao', 'ma')
  console.log(newInstance.toLocaleString())