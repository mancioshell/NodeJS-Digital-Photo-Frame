## NodeJSDigitalPictureFrame

NodeJS Digital Picture Frame using seneca framework to create microservice, and socket.io to push image from Filesystem(or NAS) to the browser connected.

- Start cec-client : `node cec/cec-client.js` (You must have an hardware support USB CEC Adapter. See this for more information: https://github.com/Pulse-Eight/libcec).
You can simulate cec command using client/ws-client.js

- Start websocket microservice: `node websocket/ws-microservice.js`

- Start network filesystem microservice: `node nfs/nfs-microservice.js`

- Start express server: `node index.js`

- Open browser at `localhost:3000`

- Enjoy :)


## Used Technology:
- Seneca JS - https://github.com/senecajs/seneca
- Express JS - https://github.com/strongloop/express
- Socket.io : https://github.com/socketio/socket.io/
- Node CEC : https://github.com/pmorissette/nodecec
