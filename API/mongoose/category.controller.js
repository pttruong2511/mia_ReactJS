const categoryModel = require('./category.model')


module.exports = {addCategory, getAll,editCategory,delCategory,getCategoryByID}

async function getAll(){
    try {
        const temp = await categoryModel.find()
        const data = temp.map( e => e = {
            id: e._id,
            name: e.name,
            status: e.status,
            image: "http://localhost:3000/images/" +  e.image
        })
        return data
    } catch (error) {
        console.log(error);
        // throw err
    }
}

async function getCategoryByID(id){
    try {
        const temp = await categoryModel.findById(id)
        if(!temp) throw new Error("Không tìm thấy danh mục")
        const data = {
            id: temp._id,
            name: temp.name,
            status: temp.status,
            image: "http://localhost:3000/images/" +  temp.image
        }
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function addCategory(body){
    try {
        const{name, status,image} = body
        const newCategory = new categoryModel({name:name,status:status,image:image})
        const result = await newCategory.save()
        return result
    } catch (error) {
        console.log(error);
        throw err
    }
}

async function editCategory(id,body){
    try {
        const temp = await categoryModel.findById(id)
        var fs = require('fs');
        fs.unlink(`./public/images/${temp.image}`,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
        });
        const cat = await categoryModel.findById(id)
        if(!cat){
            throw new Error
        }
        const {name,status,image} = body
        const result = await categoryModel.findByIdAndUpdate(id,{name,status,image},{new:true})
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function delCategory(id){
    try {
        const temp = await categoryModel.findById(id)
        var fs = require('fs');
        fs.unlink(`./public/images/${temp.image}`,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
        });
        const delCat = await categoryModel.findByIdAndDelete(id)
        if(!delCat) throw new Error("Không tìm thấy sản phẩm")
        return delCat
    } catch (error) {
        console.log(error);
        throw error
    }
}