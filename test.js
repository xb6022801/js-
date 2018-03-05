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

