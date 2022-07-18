import * as express from 'express'

const app = express()

app.get('/', function(req, res){
  res.send('GET/ ')
})

app.post('/', function(req, res ){
  res.status(201).send('POST/')
})

app.put('/', function(req, res){
  res.send('PUT/')
})


app.delete('/', function(reqq, res){
res.send('DELETE/')
})




app.listen(3000, ()=> console.log(`ONLINE http://localhost:3000`))