var leftPos = (typeof window.screenLeft == 'number') ?
               window.screenLeft : window.screenX // 设置兼容性， 同理对于topPos

document.documentElement.clientHeight
document.body.clientHeight

if (document.compatMode == 'CSS1Compact') {
  pageWidth = document.documentElement.clientWidth
} else {
  pageWidth = document.body.clientWidth
}

window.open(url, target, feature, )
var newWindow = window.open('https://www.baidu.com', 'topframe', 'fullscreen', )
newWindow.resizeBy(100, 100)
newWindow.close()

// test
let date = new Number(Date.now())
var interval = setInterval(function() {
  console.log(date += 1)
}, 1000)

setTimeout(function() {
  clearInterval(interval)
}, 3000)