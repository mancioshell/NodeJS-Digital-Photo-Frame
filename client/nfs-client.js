var seneca = require('seneca')()
var client = seneca.client()

client.act({ role:'images', cmd:'path', move:'left'}, function (err, result) {
  console.log(result)
})