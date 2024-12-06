const productModel = require("./product.model");
const categoryModel = require("./category.model");
const brandModel = require("./brand.model");
const { ObjectId } = require("mongodb");

module.exports = {
  getAllProduct,
  getSaleProduct,
  getAllProductbyCategory,
  getProductById,
  getProductSame,
  getProductByPage,
  addProduct,
  findProduct,
  delProduct,
  editProduct,
  getQuery,
};

async function getAllProduct() {
  try {
    const temp = await productModel.find().sort({ _id: -1 });
    const data = temp.map(
      (e) =>
        (e = {
          id: e._id,
          name: e.name,
          price_sale: e.price_sale,
          price_origin: e.price_origin,
          quantity: e.quantity,
          status: e.status,
          images: e.images.map(
            (item) => "http://localhost:3000/images/" + item
          ),
          types: e.types,
          view: e.view,
          brand_id: e.brand_id,
          descript: e.descript,
          category_id: e.category_id,
        })
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getSaleProduct() {
  try {
    const temp = await productModel
      .find()
      .sort({
        price_sale: -1,
      })
      .limit(5);
    const data = temp.map(
      (e) =>
        (e = {
          id: e._id,
          name: e.name,
          price_sale: e.price_sale,
          price_origin: e.price_origin,
          quantity: e.quantity,
          status: e.status,
          images: e.images.map(
            (item) => "http://localhost:3000/images/" + item
          ),
          types: e.types,
          view: e.view,
          brand_id: e.brand_id,
          descript: e.descript,
          category_id: e.category_id,
        })
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getAllProductbyCategory(category_id, limit) {
  try {
    const temp = await productModel
      .find({
        category_id: category_id,
      })
      .limit(limit);
    const data = temp.map(
      (e) =>
        (e = {
          id: e._id,
          name: e.name,
          price_sale: e.price_sale,
          price_origin: e.price_origin,
          quantity: e.quantity,
          status: e.status,
          images: e.images.map(
            (item) => "http://localhost:3000/images/" + item
          ),
          types: e.types,
          view: e.view,
          brand_id: e.brand_id,
          descript: e.descript,
          category_id: e.category_id,
        })
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getQuery(query) {
  try {
    const { categoryID, search, price, sort } = query;
    let matchPipeline = {};
    if (categoryID) {
      matchPipeline.category_id = new ObjectId(categoryID);
    }
    if (search) {
      matchPipeline.name = {
        $regex: search,
        $options: "i",
      };
    }
    if (price) {
      const [min, max] = price.split("-");
      matchPipeline.price_sale = {
        $gte: +min,
        $lte: +max,
      };
    }

    let sortPipeline = {}
    sortPipeline.price_sale =  (sort == 1) ?   1 : -1
    console.log(sortPipeline);
    
    const pipeline = [{ $match: matchPipeline }, { $sort: sortPipeline }];
    const temp = await productModel.aggregate(pipeline);
    const result = temp.map((e) => ({
      id: e._id,
      name: e.name,
      price_sale: e.price_sale,
      price_origin: e.price_origin,
      quantity: e.quantity,
      status: e.status,
      images: e.images.map((item) => "http://localhost:3000/images/" + item),
      types: e.types,
      view: e.view,
      brand_id: e.brand_id,
      descript: e.descript,
      category_id: e.category_id,
    }));
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getProductById(id) {
  try {
    const temp = await productModel.findById(id);
    const data = {
      id: temp._id,
      name: temp.name,
      price_sale: temp.price_sale,
      price_origin: temp.price_origin,
      quantity: temp.quantity,
      status: temp.status,
      images: temp.images.map((item) => "http://localhost:3000/images/" + item),
      types: temp.types,
      view: temp.view,
      brand_id: temp.brand_id,
      descript: temp.descript,
      category_id: temp.category_id,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getProductSame(id) {
  try {
    const product = await productModel.findById(id);
    console.log(product);
    const categoryById = await categoryModel.findById(product.category_id);
    const data = await productModel
      .find({
        category_id: categoryById._id,
        _id: { $ne: id },
      })
      .limit(5);
    const result = await data.map(
      (e) =>
        (e = {
          id: e._id,
          name: e.name,
          price_sale: e.price_sale,
          price_origin: e.price_origin,
          quantity: e.quantity,
          status: e.status,
          images: e.images.map((e) => "http://localhost:3000/images/" + e),
          types: e.types,
          view: e.view,
          brand_id: e.brand_id,
          descript: e.descript,
          category_id: e.category_id,
        })
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getProductByPage(page) {
  try {
    const limitdefault = 10;
    const begin = (page - 1) * limitdefault;
    const data = await productModel.find().skip(begin).limit(limitdefault);
    const result = data.map(
      (e) =>
        (e = {
          id: e._id,
          name: e.name,
          price_sale: e.price_sale,
          price_origin: e.price_origin,
          quantity: e.quantity,
          status: e.status,
          images: e.images.map((e) => "http://localhost:3000/images/" + e),
          types: e.types,
          view: e.view,
          brand_id: e.brand_id,
          descript: e.descript,
          category_id: e.category_id,
        })
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function addProduct(body) {
  try {
    const {
      name,
      price_sale,
      price_origin,
      quantity,
      status,
      images,
      types,
      brand_id,
      descript,
      category_id,
    } = body;
    const findCategory = await categoryModel.findById(category_id);
    const findBrand = await brandModel.findById(brand_id);
    const newProduct = new productModel({
      name: name,
      price_sale: +price_sale,
      price_origin: +price_origin,
      quantity: +quantity,
      status: +status,
      images: images,
      types: JSON.parse(types),
      view: 1,
      brand_id: findBrand._id,
      descript,
      category_id: findCategory._id,
    });
    const result = newProduct.save();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function delProduct(id) {
  try {
    const temp = await productModel.findById(id);
    var fs = require("fs");
    fs.unlink(`./public/images/${temp.image}`, function (err) {
      if (err) return console.log(err);
      console.log("file deleted successfully");
    });
    const result = productModel.findByIdAndDelete(id);
    if (!result) throw new Error("Không tìm thấy sản phẩm");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function editProduct(id, body) {
  try {
    const {
      name,
      price_sale,
      price_origin,
      quantity,
      status,
      images,
      types,
      view,
      brand_id,
      descript,
      category_id,
    } = body;
    const findCategory = await categoryModel.findById(category_id);
    const findBrand = await brandModel.findById(brand_id);
    const result = productModel.findByIdAndUpdate(
      id,
      {
        name: name,
        price_sale: price_sale,
        price_origin: price_origin,
        quantity: quantity,
        status: status,
        images: images,
        types: JSON.parse(types),
        view: view,
        brand_id: findBrand._id,
        descript,
        category_id: findCategory._id,
      },
      {
        new: true,
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function findProduct(keyword) {
  try {
    const temp = await productModel.find({
      name: {
        $regex: keyword,
        $options: "i",
      },
    });
    const result = temp.map(
      (e) =>
        (e = {
          id: e._id,
          name: e.name,
          price_sale: e.price_sale,
          price_origin: e.price_origin,
          quantity: e.quantity,
          status: e.status,
          images: e.images.map(
            (item) => "http://localhost:3000/images/" + item
          ),
          types: e.types,
          view: e.view,
          brand_id: e.brand_id,
          descript: e.descript,
          category_id: e.category_id,
        })
    );
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
