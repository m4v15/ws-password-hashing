const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);
const port = process.env.PORT || 4000;

const startServer = () => {
  server.listen(port, (error) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('server listening on port 4000');
    }
  });
}

startServer();
