const express = require('express');
const bcrypt = require('bcrypt');
const validator = require('validator');

const User = require('../models/UserModel');


async function createUser(req, res){
    const id = req.params.id;
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)

    const isEmailFormat = (userEmail) => {
        return validator.isEmail(userEmail);
    }

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Fields should not be empty" });
    }

 
    if (!isEmailFormat(email)) {
        return res.status(400).json({ messgae: "Invalid email format"})
    }
    

    const userExist = await User.findOne({ email }); 
    if (userExist) {
        return res.status(409).json({ message: "User already exists" });
    }

    let user = await new User({
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
    }).save();

    return res.status(201).json(user);
};


async function getUsers(req, res){
    const users = await User.find();
    if (!users) return res.status(404).json({ message: "User not found." });
    
    return res.send(users);
}

async function getUserById(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User does not exist." });

    return res.send(user);
}



// Update book controller
async function updateUser(req, res) {
    if (!req.body) {
        res.status(400).send({
            message: "No data to update"
        });
        return;
    }

    const allowedFields = ['username', 'password'];
    const updates = {};

    // Check of the avaible updates
    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            updates[field] = req.body[field];
        }
    });

    // If there's no updates to be done
    if (Object.keys(updates).length === 0) {
        res.status(400).send({
            message: "No valid fields to update"
        });
        return;
    }

    const userId = req.params.id;

    try {
        const data = await BookModel.findByIdAndUpdate(userId, updates, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: "No user found."
            });
        } else {
            res.send({ message: "User updated successfully." });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}



// Check delete user function
async function deleteUser(req, res) {
    const { id } = req.params;
    await User.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        } else {
            res.send({
                message: "User deleted successfully!"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}