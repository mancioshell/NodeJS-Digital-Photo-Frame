var NodeCEC = require('nodecec');
var seneca = require('seneca')();
var client = seneca.client({port:10102});

var cec = new NodeCEC();
// start cec connection
cec.start();

cec.on('ready', function(data) {
    console.log("ready...");
});

cec.on('status', function(data) {
   console.log("[" + data.id + "] changed from " + data.from + " to " + data.to); 
});

cec.on('key', function(data) {
    console.log(data.name);
    client.act({ role:'websocket', cmd:'push', action:data.name}, function (err, result) {
  		console.log(result)
	});
});

cec.on('close', function(code) {
    process.exit(0);
});

cec.on('error', function(data) {
    console.log('---------------- ERROR ------------------');
    console.log(data);
    console.log('-----------------------------------------');
});

var stdin = process.openStdin();
stdin.on('data', function(chunk) { 
    cec.send(chunk);
});