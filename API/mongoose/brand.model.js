const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.ObjectId

const brand = new schema({
    name: {type: String},
    image: {type: String}
})


module.exports = mongoose.model('brand', brand) || mongoose.models.brand;
