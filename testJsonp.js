function hello(response) {
  var element = document.createElement('p')
  element.innerText = response.data
  document.body.appendChild(element)
}

function jsonp() {
    var scriptE = document.createElement('script')
    scriptE.src="http://localhost:8081?callback=hello"
    document.getElementsByTagName('head')[0].appendChild(scriptE)
}

jsonp()
