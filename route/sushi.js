const { Router } = require('express')
const router = Router()
const {deleteSushi, createSushi, showSushi, editSushi} = require('../controller/Sushi')

let Sushi = require('../models/Sushi')

const sushis = [
    {id:1,'name':'sushi au thon', 'price':'12'},
    {id:8,'name':'sushi a la creme fraiche', 'price':'12'},
    {id:5,'name':'sushi au saumon', 'price':'12'}
]

router.get('/', (req, res)=>{
    res.send(sushis)
})

router.get('/:id', (req, res)=>{
    let {id} = req.params
    let sushi = sushis.find(x => x.id == id)
    res.send(sushi)
})



router.post('/create', (req, res)=>{
    let sushi = {}
    sushi.id = Math.max(...sushis.map(o => o.id)) + 1
    let {...sushiRecu} = req.body
    Object.assign(sushi,sushiRecu)
    sushis.push(sushi)

    res.send('Wonderfull ! A new sushi is born today :)')
})

router.get('/show/:name', showSushi)
router.put('/edit/:name', editSushi)
router.post('/add', createSushi)
router.delete('/delete/:name', deleteSushi)

module.exports = router