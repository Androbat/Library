const validator = require('validator');
const jwt = require('jsonwebtoken');

function isValidEmail(email){
    return validator.isEmail(email);   
}

function createToken(user){
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1 hour",
    });
    return token;
}


module.exports = {
    isValidEmail,
    createToken,
}





