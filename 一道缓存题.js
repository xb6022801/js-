
function Cache() {
    this.store = {}
  }
  
  Cache.prototype.new = function(name, fn) {
    if (!name || !fn || typeof fn !== 'function')
      return
    this.store[name] = { name, fn, data: {} }
  }
  
  Cache.prototype.get = function(name, key) {
    let instance = this.store[name]
    key = key || 1
    if (instance.data[key]) {
      return Promise.resolve(JSON.parse(instance.data[key]))
    } else {
      return instance.fn(key).then(data => {
        instance.data[key] = JSON.stringify(data) //deepClone
        return Promise.resolve(data)
      })
    }
  }
  
  const c = new Cache()
  
  c.new('foo', function(key) {
      return Promise.resolve([1])
  })
  
  c.get('foo').then(data => {
    data.push(2)
    return c.get('foo')
  }).then(data => {
    console.log(data)
  })


