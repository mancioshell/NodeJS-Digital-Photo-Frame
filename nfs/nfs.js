var fs = require('fs');
var nconf = require('nconf');
nconf.file({ file: 'config.json' });
var mainpath = nconf.get('mainpath');
var pointer = 0;

module.exports = function nfs( options ) {

	this.add( 'role:images, cmd:path', function path( msg, respond ) {

		var action = msg.move;
		fs.readdir(mainpath, function(err, files){
			var currentpath = files[pointer];

			if(msg.move){
				var size = files.length;
				pointer = action==="right" ? (pointer+1)%size : (size+pointer-1)%size;				
			}			
			respond( null, { answer: mainpath+"/"+currentpath } );
			
		});	
		
	});

}