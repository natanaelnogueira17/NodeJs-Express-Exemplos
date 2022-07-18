const express = require('express')

const app = express()

app.get('/', function(req, res){
  res.send('hello world 3')
})

app.get('/teste', function(req, res){
  res.send('hello Teste')
})

app.listen(3000, ()=> console.log(`ONLINE http://localhost:3000`))