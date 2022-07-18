import * as express from 'express'

const app = express()
import UserController from './controller/UserController'

app.use('/use', UserController)
app.post('/post', function(req, res){
  res.send('CREATE POST/ ')
})

app.get('/post/:id?', function(req, res){
  res.send('GET POST/ ')
})


app.listen(3000, ()=> console.log(`ONLINE http://localhost:3000`))