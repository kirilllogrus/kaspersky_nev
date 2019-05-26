import axios from 'axios';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const client = require('redis').createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Error ' + err);
});


app.get('/test', function(req, res){
	let result = {"test":"HELLO WORLDS"};
	res.json(result);

});

app.post('/loggin', function(req, res){
	client.lrange('data', 0, -1, function(err, reply) {
	   let result = reply.map((el,idx)=>{
			let res;			
			try{
				res = JSON.parse(el);
			} catch(e){
				console.log(e);			
			}
			return res;
	   });
	   res.json(result);
	});
});

app.get('/logs', function(req, res){
	client.lrange('log', 0, -1, function(err, reply) {
	   let result = reply.map((el,idx)=>idx !== 0 ? JSON.parse(el) : 0);
	   res.json(result);
	}); 
});

app.get('/data', function(req, res){
	client.lrange('data', 0, -1, function(err, reply) {
	    let result = reply.map((el,idx)=>{
			let res;			
			try{
				res = JSON.parse(el);
			} catch(e){
				console.log(e);			
			}
			return res;
	   });
	   res.json(result);
	});
});

app.post('/create', function(req, res){
	client.rpush('data', JSON.stringify(req.body), function(err, reply) {
	   	let logpos = {type: 'dataAdded', 'date': new Date()}
		client.rpush('log', JSON.stringify(logpos), function(err, reply) {
		   res.json(reply);
		});
	});
	
});

app.post('/logging', function(req, res){
	let logpos = {type: 'logged', 'date': new Date()}
	client.rpush('log', JSON.stringify(logpos), function(err, reply) {
	    res.json(reply);
	});
});

module.exports = {
  path: "/api/",
  handler: app
};
