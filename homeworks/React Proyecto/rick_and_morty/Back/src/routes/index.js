const Router = require('express')
const getCharById = require('../controllers/getcharById')
const getCharDetail = require('../controllers/getCharDetail')
let character = require('../utils/favs')
const router = Router()

router.get('/onsearch/:id', getCharById)

router.get('/detail/:id',getCharDetail)

router.post('/fav', function(req, res){
        
    const repetido = character.find(charr =>charr.id === req.body.id)
    if(repetido){
        return res.status(200).json({'error': 'este personaje ya se encuentra agregado'})
    }
    character.push(req.body)
    res.json({'Listo':'listo'})
})
router.get('/fav', function(req, res){
    res.json(character)
})
router.delete('/fav/:id', function(req,res){
    const {id} = req.params;
    if(!id){res.status(404).json({error:'no ingresaste ningun id'})}
    else{
        const personaje = character.find(charr => charr.id === Number(id))
        if(personaje){
            character=  character.filter(charr => charr.id !== Number(id))
            res.send('hecho')

        }else{
            res.status(404).json({error: 'id invalido'})
        }
    }
})

module.exports = router;