var app = function() {
  var currentVersion = '2.3.2' //私有变量

  return {
    getCurrentVersion() {
      return currentVersion
    }
  }
}()

//以这种模式创建的app，都是Object的实例

console.log(app.getCurrentVersion()) //2.3.2