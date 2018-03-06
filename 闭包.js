function father(name) {
    return function(v1, v2) {
        return v1 - v2
    }
  }
  
  //
  var res = father('yes')
  console.log(res(1, 2))

  function fn() {
	var res = new Array()
	for(var i=0; i<10;i++) {
		res[i] = function(num) {
			
				return num
			
		}(i)
	}
	return res
}

console.log(fn())

//包含html元素，无法被回收
function assignHandler() {
    var element = document.getElementById('id')
    element.onclick = () => {
      alert(element)
    }
}

//该进
function assignHandler() {
    var element = document.getElementById('id')
    var id = element.id
    element.onclick = () => {
      alert(id)
    }
    element = null
}