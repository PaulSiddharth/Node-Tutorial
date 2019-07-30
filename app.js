// var stuff = require('./stuff');
// console.log(stuff.counter(['a','aano']))
// console.log(stuff.adder(5,6))
// var events = require('events');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent',function(msg){
//   console.log(msg);
// })
//
// myEmitter.emit('someEvent', 'the event was emitted')
// var util = require('util')
// var Person = function (name) {
//   this.name = name;
// }

// util.inherits(Person, events.EventEmitter)
//
// var sid = new Person('SId')
// var sourav = new Person('SOrav')
// var sudip = new Person('Sudip')
// var people = [sid, sourav, sudip]
//
// people.forEach(function(person) {
//   person.on('speak', function(msg){
//     console.log(person.name + 'said :'+ msg);
//   })
// })
// sid.emit('speak', 'hey dude')
// sourav.emit('speak', 'hey cool')
// var fs = require('fs');
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);
// console.log(readMe);
// fs.readFile('readMe.txt','utf8', function(err, data){
//   console.log(data)
//   fs.writeFile('writeMeasyn.txt', data)
// })
// fs.unlink('writeMe.txt')
// fs.mkdirSync('stuff')
// fs.rmdirSync('stuff')
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt','utf8', function(err, data){
//     console.log(data)
//     fs.writeFile('./stuff/writeMe.txt', data)
//   })
// })

// fs.unlink('./stuff/writeMe.txt', function(){
//   fs.rmdir('stuff')
// })

// var http = require('http')

// var server = http.createServer(function(req, res){
//   console.log('request was made : ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hi SID');
// })
//
// server.listen(3000, '127.0.0.1')
// console.log('yo lisenting to port 3000')

// var fs= require('fs')
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8')
// myReadStream.on('data', function(chunk){
//   console.log('new chunk received')
//   myWriteStream.write(chunk);
// })
// myReadStream.pipe(myWriteStream)
// var server = http.createServer(function(req, res){
//   console.log('request was made : ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   // res.end('Hi SID');
//   var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//   myReadStream.pipe(res);
//
// })

// var server = http.createServer(function(req, res){
//   console.log('request was made : ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   // res.end('Hi SID');
//   var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//   myReadStream.pipe(res);
//
// })
// var server = http.createServer(function(req, res){
//   console.log('request was made : ' + req.url);
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   var myObj = {
//     name: 'Sid',
//     job: 'Developer',
//     age: 24
//   };
//   res.end(JSON.stringify(myObj))
// })


var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))
// app.use('/assets',function(req, res, next){
//   console.log(req.url);
//   next();
// })
app.get('/',function(req, res){
  // res.send('This is home page')
  res.render('index')
  // res.sendFile(__dirname + '/index.html')
});
app.get('/contact',function(req, res){
  // res.send('This is contact page')
  res.render('contact')
  // res.sendFile(__dirname + '/contact.html')

});
app.get('/profile/:name',function(req, res){
  var data = {
    age : 29,
    job : 'developer',
    hobbies : ['eating','traveling','football']
  }
  // res.send('Your profile id is ' + req.params.id)
  res.render('profile', {person: req.params.name, data: data})
});
app.listen(3000);
