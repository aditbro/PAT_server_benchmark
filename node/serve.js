var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');


if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('death', function(worker) {
            console.log('worker ' + worker.pid + ' died');
        });
} else {
    var htmlFile = process.argv[2]
    var filePath = path.join(__dirname, '../html_files/' + htmlFile);
    var stat = fileSystem.statSync(filePath);

    http.Server(function(req, res) {
            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': stat.size
            });
            var readStream = fileSystem.createReadStream(filePath);
            readStream.pipe(res);
        }).listen(8080);
}
console.log('Server running at http://127.0.0.1:8080/');