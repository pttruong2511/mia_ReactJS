var express = require("express");
var userController = require("../mongoose/user.controller");
var router = express.Router();
var multer = require("multer");
const jwt = require("jsonwebtoken");

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
    const result = await userController.getAllUser();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      mess: "Lỗi hệ thống",
      error,
    });
  }
});

router.post("/login", async function (req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userController.loginUser({ username, password });
    const access_token = jwt.sign({ user }, "shhhhh", { expiresIn: "10s" });
    const refresh_token = jwt.sign({ user }, "shhhhh");
    res.status(200).json({ user, access_token, refresh_token });
  } catch (error) {
    return res.status(500).json({ mess: "Lỗi hệ thống", error });
  }
});

router.post("/refreshtoken", async function (req, res, next) {
  try {
    let { refresh_token } = req.body;
    const data = jwt.verify(refresh_token, "shhhhh");
    const access_token = jwt.sign({ user: data.user }, "shhhhh", {
      expiresIn: "10s",
    });
    refresh_token = jwt.sign({ user: data.user }, "shhhhh");
    res.status(200).json({ user: data.user, access_token, refresh_token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const { username, password, name, role } = req.body;
    const result = await userController.registerUser({
      username,
      password,
      name,
      role,
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ mess: "Lỗi hệ thống", error });
  }
});

module.exports = router;
