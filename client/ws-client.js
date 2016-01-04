var seneca = require('seneca')()
var client = seneca.client({port:10102})

client.act({ role:'websocket', cmd:'push', action:'left'}, function (err, result) {
  console.log(result)
})