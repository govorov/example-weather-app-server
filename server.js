'use strict';

const express = require('express');
const cors    = require('cors');
const _       = require('lodash');

let app = express();


app.use(cors());


app.get('/',function(req,res){
	res.send("Use /temperature, /precipation, /wind, /humidity");
});


app.get('/precipation',function(req,res){
    let values = [
        'clear',
    	'rain',
    	'hail',
    	'snow',
    	'lava',
    ];
    res.json({result:_.sample(values)});
});


app.get('/wind',function(req,res){
	let speed = Math.round(Math.random()*50);
    res.json({result:speed});
});


app.get('/temperature',function(req,res){
	let min  = -40;
	let max  =  40;
	let temp = min + Math.round(Math.random()*max);
    // temp = Date.now();
    res.json({result:temp});
});


app.get('/humidity',function(req,res){
	let value = Math.round(Math.random()*95);
    res.json({result:value});
});

let port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`App started on ${port}`);
});
