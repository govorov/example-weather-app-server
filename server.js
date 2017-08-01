'use strict';

const express = require('express');
const cors    = require('cors');
const _       = require('lodash');
const morgan  = require('morgan');
const delay   = require('express-delay');

const app = express();

app.use(cors());
app.use(morgan('[:date[clf]] :remote-addr :method :url :status [:response-time ms]'));
app.use(delay(0, 1000));


app.get('/',function(req,res){
    res.send("Use /temperature, /precipation, /wind/speed, /wind/direction, /humidity");
});


app.get('/precipation',function(req,res){
    const values = [
        'clear',
        'rain',
        'hail',
        'fog',
        'snow',
        'lightning',
        'thunderstorm',
    ];
    res.json({result:_.sample(values)});
});


app.get('/wind/speed',function(req,res){
    const speed = Math.round(Math.random()*30);
    res.json({result:speed});
});


app.get('/wind/direction',function(req,res){
    const values = [
        'n',
        'nne',
        'ne',
        'ene',
        'e',
        'ese',
        'se',
        'sse',
        's',
        'ssw',
        'sw',
        'wsw',
        'w',
        'wnw',
        'nw',
        'nnw',
    ];
    res.json({result:_.sample(values)});
});


app.get('/temperature',function(req,res){
    const min  = 10;
    const max  = 40;
    const temp = min + Math.round(Math.random()*(max-min));
    res.json({result:temp});
});


app.get('/humidity',function(req,res){
    const min  = 15;
    const max  = 95;
    const value = min + Math.round(Math.random()*(max-min));
    res.json({result:value});
});

const port = process.env.PORT || 8081;

app.listen(port, function(){
    console.log(`App started on ${port}`);
});
