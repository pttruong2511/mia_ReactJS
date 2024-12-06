const userModel = require('./user.model');
var bcrypt = require('bcryptjs');
module.exports = {
    getAllUser,
    loginUser,
    registerUser
}

async function getAllUser() {
    try {
        const temp = await userModel.find().sort({
            _id: -1
        })
        const data = temp.map(e => e = {
            id: e._id,
            name: e.name,
            username: e.username,
            role: e.role
        })
        return data;
    } catch (error) {
        throw new Error(error)
    }
}

async function registerUser(body) {
    try {
        const {
            username,
            password,
            name,
        } = body;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        const temp = new userModel({
            username: username,
            password: hash,
            name: name,
            role: 1
        })
        const result = await temp.save();
        return result;
    } catch (error) {
        throw new Error(error)
    }
}


async function loginUser(body) {
    try {
        const {
            username,
            password
        } = body;
        const user = await userModel.findOne({
            username: username
        })
        if (bcrypt.compareSync(password, user.password)) {
            return {
                id: user._id,
                name: user.name,
                username: user.username,
                role : user.role,
            };
        }
        throw new Error("Đăng nhập thất bại");
    } catch (error) {
        throw new Error(error)
    }
}