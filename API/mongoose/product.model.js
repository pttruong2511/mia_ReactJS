const mongoose = require('mongoose')
const schema = mongoose.Schema
const ObjectId = schema.ObjectId

const product = new schema({
    name: {type: String},
    price_sale: {type: Number},
    price_origin: {type: Number},
    quantity: {type: Number},
    status: {type: Number},
    images: [{type: String}],
    types: [
        {
            name: {type: String},
            items: [{type: String}]
        }
    ],
    view: {type: Number},
    brand_id: {type: ObjectId, ref: "brand"},
    descript: {type: String},
    category_id: {type: ObjectId, ref: "category"}
})


module.exports = mongoose.model('product', product) || mongoose.models.product;
