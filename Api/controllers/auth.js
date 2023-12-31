
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const { statusCodes } = require('../helpers/statusCodes');


async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(statusCodes.NOT_FOUND_ERROR).json({ message: "User not found" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(statusCodes.CONFLICT_ERROR).json({ message: "Check either your email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: "1 hour",
        });

        res.json({ token });
    } catch (error) {
        next(error);
    }
}



module.exports = { login }