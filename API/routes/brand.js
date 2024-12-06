var express = require('express');
var router = express.Router();
var brandCotroller = require('../mongoose/brand.controller')
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
    // http://localhost:3000/brand
    try {
      const data = await brandCotroller.getAllBrand()
      return res.status(200).json(data)
    } catch (error) {
      console.log(error);
      return res.status(500).json({mess:"Lỗi hệ thống"})
    }
});


router.get('/:id',async function(req, res, next) {
    // http://localhost:3000/brand/:id
    try {
      const {id} = req.params 
      const data = await brandCotroller.getById(id)
      return res.status(200).json(data)
    } catch (error) {
      console.log(error);
      return res.status(500).json({mess:"Lỗi hệ thống"})
    }
});

router.post('/', upload.single('image'), async function(req, res, next) {
  // http://localhost:3000/brand
  try {
    const body = req.body
    body.image = req.file.originalname
    if(req.file){
      body.image = req.file.originalname
    }else{
      delete body.image 
    }
    const newBrand = await brandCotroller.addBrand(body)
    return res.status(200).json({mess: "Thêm thành công", newBrand})
  } catch (error) {
    console.log(error);
    return res.status(500).json({mess:"Lỗi hệ thống"})
  }
});

router.delete('/:id', upload.single('image'), async function(req, res, next) {
  // http://localhost:3000/brand/:id
  try {
    const {id} = req.params
    const result = await brandCotroller.delBrand(id)
    return res.status(200).json({mess: "Xóa thành công"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({mess:"Lỗi hệ thống"})
  }
});

router.put('/:id', upload.single('image'), async function(req, res, next) {
  // http://localhost:3000/brands/:id
  try {
    const {id} = req.params
    const body = req.body
    if(req.file){
        body.image = req.file.originalname
    }else{
        delete body.image
    }
    const result = await brandCotroller.editBrand(id,body)
    return res.status(200).json({mess: "Sửa thành công",result})
  } catch (error) {
    console.log(error);
    return res.status(500).json({mess:"Lỗi hệ thống"})
  }
});

module.exports = router;
