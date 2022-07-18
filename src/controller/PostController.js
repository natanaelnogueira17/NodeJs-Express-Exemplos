import {Router} from 'express'


const router = Router()

router.post('/', function(req, res){
  res.send('CREATE POST/ ')
})

router.get('/:id?', function(req, res){
  res.send('GET POST/ ')
})




export default router