const Sushi = require("../models/Sushi");


async function createSushi(req, res){
    let { ...sushiParams } = req.body
    let newSushi = await Sushi.create({...sushiParams})
    res.sendStatus(201)
}

async function deleteSushi(req, res){
    let {...sushiToDelete} = req.body
    let deleting = await Sushi.findOneAndDelete({...sushiToDelete})
    res.sendStatus(200)
}
const editSushi = async function edit(req,res){

    const { price,name } = req.body
    let thisSushi = await Sushi.findOneAndUpdate({name: name,price: price})
    res.sendStatus(200)

}
const showSushi = async function show(req, res){
    let { name } = req.params
    let sushi = await Sushi.find({name: name})
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Sushi with name " + name });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Sushi with name=" + name });
        });


}
module.exports= {createSushi, deleteSushi, showSushi, editSushi}
