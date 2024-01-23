const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const { statusCodes } = require('../helpers/statusCodes');
const { createToken, isValidEmail } = require("../helpers/validation");




async function createUser(req, res){
    const salt = 10;
    let { name, email, password } = req.body;
    let hashedPassword = bcrypt.hashSync(password, salt);


    if (!name || !email || !password) {
        return res.status(statusCodes.BAD_REQUEST_ERROR).json({ message: "Fields should not be empty" });
    }

 
    if (!isValidEmail(email)) {
        return res.status(statusCodes.BAD_REQUEST_ERROR).json({ messgae: "Invalid email format"})
    }
    

    const user = await User.findOne({ email }); 
    if (user) {
        return res.status(statusCodes.CONFLICT_ERROR).json({ message: "User already exists" });
    }

    let createUser = await new User({
        name: name,
        email: email,
        password: hashedPassword,
    }).save();

    const token = createToken(user);

    res.status(statusCodes.OK).json(createUser);
    res.send({ token })
};




async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!user) {
            return res.status(statusCodes.NOT_FOUND_ERROR).json({ message: "User not found" });
        }

        
        if (!isValidPassword) {
            return res.status(statusCodes.CONFLICT_ERROR).json({ message: "Check either your email or password" });
        }

        // check here
        const token = createToken(user);

        res.json({ token });
    } catch (error) {
        next(error);

    }
}





module.exports = { login, createUser }