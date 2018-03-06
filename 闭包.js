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

//