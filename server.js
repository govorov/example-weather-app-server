const express = require('express');
const _ 	  = require('lodash');
let app       = express();


app.get('/precipation',function(req,res){
    let values = [
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
    res.json({result:temp});
});


app.get('/humidity',function(req,res){
	let value = Math.round(Math.random()*95);
    res.json({result:value});
});


app.listen(3000,function(){
    console.log('App started');
});
