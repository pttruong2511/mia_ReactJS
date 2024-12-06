var express = require("express");
var router = express.Router();
var categoryController = require("../mongoose/category.controller");
var multer = require("multer");
const jwt = require("jsonwebtoken");
const authen = require("../middleware/authen");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const checkfile = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|png|jpeg|web)$/)) {
    return cb(new Error("Bạn chỉ được upload file ảnh"));
  }
  return cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: checkfile,
});
/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const result = await categoryController.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mess: "Lỗi hệ thống",
      error,
    });
  }
});

router.get("/:id", async function (req, res, next) {
  // http://localhost:3000/category/:id
  try {
    const { id } = req.params;
    const result = await categoryController.getCategoryByID(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mess: "Lỗi hệ thống",
      error,
    });
  }
});

router.post("/", authen, async function (req, res, next) {
  // http://localhost:3000/category
  try {
    const body = req.body;
    const result = await categoryController.addCategory(body);
    return res.status(200).json({
      mess: "Thêm thành công",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mess: "Lỗi hệ thống",
      error,
    });
  }
});

router.put("/:id", authen, async function (req, res, next) {
  // http://localhost:3000/category/:id
  try {
    const { id } = req.params;
    const body = req.body;
    console.log(body);
    if (req.file) {
      body.image = req.file.originalname;
    } else {
      delete body.image;
    }
    const result = await categoryController.editCategory(id, body);
    return res.status(200).json({
      mess: "Sửa thành công",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mess: "Lỗi hệ thống",
      error,
    });
  }
});

router.delete("/:id", authen, upload.single("image"), async function (req, res, next) {
  try {
    const { id } = req.params;
    const result = await categoryController.delCategory(id);
    res.status(200).json({
      mess: "Xóa thành công",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mess: "Lỗi hệ thống",
    });
  }
});

module.exports = router;
