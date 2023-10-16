const Pizza = require("../models/Pizza");


async function createPizza(req, res){
    let { ...pizzaParams } = req.body
    let newPizza = await Pizza.create({...pizzaParams})
    res.sendStatus(201)
}

async function deletePizza(req, res){
    let {...pizzaToDelete} = req.body
    let deleting = await Pizza.findOneAndDelete({...pizzaToDelete})
    res.sendStatus(200)
}
const editPizza = async function edit(req,res){

    const { price,name } = req.body
    let thisPizza = await Pizza.findOneAndUpdate({name: name,price: price})
    res.sendStatus(200)

}
const showPizza = async function show(req, res){
    let { name } = req.params
    let pizza = await Pizza.find({name: name})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Pizza with name " + name });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Pizza with name=" + name });
        });


}
module.exports= {createPizza, deletePizza, showPizza, editPizza}
