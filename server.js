const http = require('http')
const url = require('url')
const data = { "data": "hello world"}

http.createServer(function(req, res) {
  let params = url.parse(req.url, true)
  if (params.query.callback) {
    let str = params.query.callback + '(' + JSON.stringify(data) + ")"
    res.end(str)
  } else {
    res.end()
  }
}).listen(8081, () => {
  console.log('listen to 8081')
})