const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.ObjectId

const category = new schema({
    name: {type: String},
    status: {type: String},
    image : {type: String}
})

module.exports = mongoose.model('category', category) || mongoose.models.category;