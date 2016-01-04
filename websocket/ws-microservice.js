var seneca = require( 'seneca' )();
seneca.use( 'websocket' ).listen({port:10102});