var seneca = require('seneca')();
var fs = require('fs');

var io = require('socket.io')(8080);
require('socket.io-stream')(io);
io.on('connection', function (socket) {
	console.log("client connected ...");
	retrieveAndStreamImage();
});

var retrieveAndStreamImage = function(action, respond)
{
	//get current path after movement
	seneca.client({port:10101}).act({ role:'images', cmd:'path', move:action}, function(err, out){
		console.log(out);

		var readStream = fs.createReadStream(out.answer, {autoClose:  true});			

		readStream.on('data', function(data) {
			io.emit('message', data);
		});

		readStream.on('end',function(){
			console.log('DATA COMPLETE');
			io.emit('end');
			if(respond) respond( null, { answer: out } );
		});			
	});
}

module.exports = function websocket( socket ) {
	this.add( 'role:websocket, cmd:push', function move( msg, respond ) {

		var action = msg.action || "right";
		retrieveAndStreamImage(action, respond);		
	});
}