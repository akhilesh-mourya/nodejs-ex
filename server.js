require("@babel/register")

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './views/App.js';

import fs from 'fs';
import ws from 'ws';
import http from 'http';
import https from 'https';
import path from 'path';


export default class CallHandler {

  constructor() {
    this.wss = null;
    this.ws = null;
    this.clients = new Set();
    this.server = null;
    this.ssl_server = null;
    this.sessions = [];
}

init() {
 const app = express();
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {

    const body = renderToString(<App />);

    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Flutter WebRTC Demo</title>
    </head>
    
    <body>
        <div id="app">${body}</div>
    </body>
    
    </html>`);

});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

}
}

let callHandler = new CallHandler();
callHandler.init();