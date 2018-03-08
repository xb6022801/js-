var book = {
  _year: 2018
}
Object.defineProperties(book, {
  _version: {
    value: '1.0'
  },

  year: {
    get: function() {
      return this._year
    },
    set: function(newValue) {
      console.log('setting new value')
      this._year = newValue
    },
    configurable: true
  }
})

console.log(book._version)
book._version = '2.0'
console.log(book.year)
book.year = 2019
console.log(book._year)

console.log(Object.getOwnPropertyDescriptor(book, '_year'))
