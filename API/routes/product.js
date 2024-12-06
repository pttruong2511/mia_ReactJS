var express = require('express');
var router = express.Router();
var productController = require('../mongoose/product.controller')
var multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const checkfile = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|png|jpeg|web)$/)) {
        return cb(new Error('Bạn chỉ được upload file ảnh'))
    }
    return cb(null,true)
}

const upload = multer({storage: storage, fileFilter: checkfile})

/* GET users listing. */
router.get('/',async function(req, res, next) {
    // http://localhost:3000/product
    try {
        const result = await productController.getAllProduct()
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});


router.get('/sale',async function(req, res, next) {
    // http://localhost:3000/product/sale
    try {
        const result = await productController.getSaleProduct()
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.get('/same/:id',async function(req, res, next) {
    // http://localhost:3000/product/same/:categoryid
    try {
        const {id} = req.params
        const result = await productController.getProductSame(id)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.get('/cat/:limit/:id',async function(req, res, next) {
    // http://localhost:3000/product/cat/limit/:id
    try {
        const {id,limit} = req.params
        const result = await productController.getAllProductbyCategory(id,limit)
        return res.status(200).json(result) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

// Router query
router.get('/query',async function (req, res, next) {
    try {
        const query = req.query
        const result = await productController.getQuery(query)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
})


router.get('/:id',async function(req, res, next) {
    // http://localhost:3000/product/:id
    try {
        const {id} = req.params
        const result = await productController.getProductById(id)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.get('/page/:page',async function(req, res, next) {
    // http://localhost:3000/product/page/:page
    try {
        const {page} = req.params
        const result = await productController.getProductByPage(page)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.post('/',upload.array('image'), async function(req, res, next) {
    // http://localhost:3000/product
    try {
        const body = req.body
        body.images = req.files.map(file => file.originalname)
        const result = await productController.addProduct(body)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.put('/:id',upload.array('image'), async function(req, res, next) {
    // http://localhost:3000/product/:id
    try {
        const {id} = req.params
        const body = req.body
        if(req.files.length){
            body.images = req.files.map( file => file.originalname)
        }else{
            delete body.images
        }
        const result = await productController.editProduct(id,body)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.delete('/:id',upload.array('image'), async function(req, res, next) {
    // http://localhost:3000/product/:id
    try {
        const {id} = req.params
        const result = await productController.delProduct(id)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});

router.get('/search/:keyword', async function(req, res, next) {
    // http://localhost:3000/product/search/:keyword
    try {
        const {keyword} = req.params
        const result = await productController.findProduct(keyword)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({mess: 'Lỗi hệ thống', error})
    }
});



module.exports = router;
