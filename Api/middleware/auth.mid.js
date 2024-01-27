const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const { statusCodes } = require('../helpers/statusCodes');
const { configDotenv } = require('dotenv');


async function authorizeRequest(req, res, next){
   
    const token = req.headers.authorization?.split(' ')[1];
    console.log("Token is being received:",token);
    if (!token){
        return res.status(statusCodes.CONFLICT_ERROR).json({ message: 'Authentication required'});
    }
    
    try {
        const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decode token: ",decodeToken);
        const user = await User.findById(decodeToken.userId);
        console.log("User: ",user);
        if (!user){
            return res.status(statusCodes.NOT_FOUND_ERROR).json({ message: 'User not found'});
        }
        
      
        req.user = user;
        next();
    } catch (error) {
        res.status(statusCodes.CONFLICT_ERROR).json({ message: 'Invalid token' });

    }
}



module.exports = { authorizeRequest };