const { Router } = require('express')
const router = Router()
const {deletePizza, createPizza, showPizza, editPizza} = require('../controller/Pizza')

let Pizza = require('../models/Pizza')

const pizzas = [
    {id:1,'name':'cannibal', 'price':'12'},
    {id:8,'name':'reine', 'price':'12'},
    {id:5,'name':'4 fromages', 'price':'12'}
]

router.get('/', (req, res)=>{
    res.send(pizzas)
})

router.get('/:id', (req, res)=>{
    let {id} = req.params
    let pizza = pizzas.find(x => x.id == id)
    res.send(pizza)
})
// router.get('/delete/:id', (req, res)=>{
//     let {id} = req.params
//     let pizza = pizzas.find(x => x.id == id)
//     console.log(pizza)
//     res.send(pizza)
// })


router.post('/create', (req, res)=>{
    let pizza = {}
    pizza.id = Math.max(...pizzas.map(o => o.id)) + 1
    let {...pizzaRecu} = req.body
    Object.assign(pizza,pizzaRecu)
    pizzas.push(pizza)

    res.send('Wonderfull ! A new pizza is born today :)')
})

router.get('/show/:name', showPizza)
router.put('/edit/:name', editPizza)
router.post('/add', createPizza)
router.delete('/delete/:name', deletePizza)

module.exports = router