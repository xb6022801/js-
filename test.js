if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest()
}

if ((xhr.status >= 200 || xhr.status <= 300) || xhr.status == 304) {
    alert(xhr.responseText)
}

xhr.open()
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
const form = document.getElementById('user-info')
xhr.send(serialize(form))

xhr.onprogress = function(event) {
    if (event.lengthcomputable) {
        alert(`you have received ${event.position} of ${event.totalSize}`)
    }
}

//check cors compability
function createCorsRequest(method, url) {
  const xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    xhr.open(method, url)
    // xhr.send(null)
  } else {
    const xdr = new XDomainRequest()
    xdr.open(method, url)
  }
  return xdr
}

var request = new xhr('post', 'http://www.baidu.com')
if (request) {
  request.onload = function () {

  }
  request.send(null)
}

//websocket
var websocket = new WebSocket(absolute URL)
