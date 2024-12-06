const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.ObjectId

const user = new schema({
    name: {type: String},
    username: {type: String},
    password: {type: String},
    role: {type: Number},
})

module.exports = mongoose.model('user', user) || mongoose.models.user;