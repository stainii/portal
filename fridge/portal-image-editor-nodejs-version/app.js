// dependencies
const express = require('express');
const gm = require('gm');
const fs = require('fs');

// environment variables
const port = process.env.PORT || 3000;
const hostName = process.env.HOSTNAME || "localhost";
const ipAddress = process.env.IP_ADDRESS || "localhost";
const eurekaHost = process.env.EUREKA_HOST || "localhost";
const eurekaPort = process.env.EUREKA_PORT || 8761;
const eurekaServicePath = process.env.EUREKA_SERVICE_PATH || '/eureka/apps/';

let multer = require("multer");
let upload = multer({ dest: '/tmp/uploads/' });
let app = express();

// configure Eureka
const Eureka = require('eureka-js-client').Eureka;
new Eureka({
    instance: {
        app: 'image-editor',
        hostName: hostName,
        ipAddr: ipAddress,
        statusPageUrl: 'http://' + hostName + ':' + port + '/status',
        port: {
            '$': port,
            '@enabled': 'true',
        },
        vipAddress: hostName,
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: eurekaHost,
        port: eurekaPort,
        servicePath: eurekaServicePath
    },
}).start();

// routes
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/resize/', upload.single('image'),  (req, res) => {
    if (req.body.cropIfNecessary == "true") {
        gm(req.file.path)
            .resize(req.body.width, req.body.height, '^')
            .gravity('Center')
            .crop(req.body.width, req.body.height)
            .stream(function(err,stdout){
                if (err) return next(err);
                stdout.pipe(res);
            });
    } else {
        gm(req.file.path)
            .resize(req.body.width, req.body.height)
            .stream(function(err,stdout){
                if (err) return next(err);
                stdout.pipe(res);
            });
    }
    //fs.unlink(req.file.path, (err) => { if (err) return next(err); }); => vroeger kon ik dit aan een finish event van een stream koppellen...
});
app.post('/composite/',
    upload.fields([{name: 'backgroundImage', maxCount: 1}, {name: 'foregroundImage', maxCount: 1}]),
    (req, res) => {
    gm(req.files["backgroundImage"][0].path)
        .composite(req.files["foregroundImage"][0].path)
        .geometry('+' + req.body.x + '+' + req.body.y)
        .stream(function(err,stdout){
            if (err) return next(err);
            stdout.pipe(res);
        });

});

app.get('/status', (req, res) => res.send('OK'));

// start server
app.listen(port, () => console.log(`App listening on port ${port}!`));
