const brandModel = require('./brand.model')

module.exports = {getAllBrand,addBrand,delBrand,editBrand,getById}

async function getAllBrand(){
    try {
        const temp = await brandModel.find()
        const data = await temp.map( e => e = {
            id: e._id,
            name: e.name,
            image: "http://localhost:3000/images/"+ e.image
        })
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function getById(id) {
    try {
        const temp = await brandModel.findById(id)
        const result = {
            id: temp.id,
            name: temp.name,
            image : "http://localhost:3000/images/"+ temp.image
        }
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function addBrand(body) {
    try {
        const {name, image} = body
        const newBrand = new brandModel({name: name, image: image})
        const result = await newBrand.save()
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function delBrand(id) {
    try {
        const temp = await brandModel.findById(id)
        var fs = require('fs');
        fs.unlink(`./public/images/${temp.image}`,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
        });
        const result = await brandModel.findByIdAndDelete(id)
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function editBrand(id,body){
    try {
        const temp = await brand.findById(id)
        var fs = require('fs');
        fs.unlink(`./public/images/${temp.image}`,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
        });
        const data = await brandModel.findById(id) 
        if(!data){
            throw new Error
        }
        const {name,image} = body
        const result = await brandModel.findByIdAndUpdate(id,{name, image},{new:true})
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}