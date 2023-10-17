const mongoose = require('mongoose')

const SushiSchema = new mongoose.Schema({

    name:{
        type: mongoose.SchemaTypes.String
    },
    price: {
        type: mongoose.SchemaTypes.Number
    }
})


module.exports = mongoose.model('sushi', SushiSchema)