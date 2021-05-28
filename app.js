const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Something in the rain");
    next();
});

app.use((req, res, next) => {
    console.log("Something in the winter");
    res.send( { key1: "value" }) ;
});

const server = http.createServer(app);

server.listen(4000);
