const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const server = http.createServer(requestListener);
  server.listen(8080);
  console.log(`Worker ${process.pid} started`);
} 