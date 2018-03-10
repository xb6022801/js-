let location = {
  search: '?q=javascript&val=12'
}

function getLoacationArgs() {
  let args = {}
  let qs = location.search.length > 0 ?
           location.search.substring(1) :
           ''
  if (qs.length == 0) return

  let array =  qs.split('&')
  let item
  let name
  let value
  for (let i=0; i < array.length; i++) {
    item = array[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    args[name] = value
  }
  return args
}

console.log(getLoacationArgs())

//检查插件, 不兼容IE
function hasPlugin (name) {
  if (name == null) return
  name = name.toLowerCase()
  for (let i=0; i < navigator.plugins.length; i++) {
    // console.log(navigator.plugins[i].name)
    if (navigator.plugins[i].name.toLowerCase() == name)
      return true
  }
  return false
}

console.log(hasPlugin('Chrome PDF Plugin')) // return 'true' in my chrome browser

/**
 * IE需要新建ActiveObjectX实例，并且知道该插件唯一标识符才行，用try catch
 */