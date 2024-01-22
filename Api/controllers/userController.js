const express = require('express');
const bcrypt = require('bcrypt');
const { isValidEmail, createToken } = require('../helpers/validation');
const { statusCodes } = require('../helpers/statusCodes');

const User = require('../models/UserModel');


async function getUsers(req, res){
    const users = await User.find();
    if (!users) return res.status(statusCodes.NOT_FOUND_ERROR).json({ message: "User not found." });
    
    return res.send(users);
}

async function getUserById(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(statusCodes.NOT_FOUND_ERROR).json({ message: "User does not exist." });

    return res.send(user);
}




async function updateUser(req, res) {
    if (!req.body) {
        res.status(statusCodes.BAD_REQUEST_ERROR).send({
            message: "No data to update"
        });
        return;
    }

    const allowedFields = ['username', 'password'];
    const updates = {};

  
    allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
            updates[field] = req.body[field];
        }
    });


    if (Object.keys(updates).length === 0) {
        res.status(statusCodes.BAD_REQUEST_ERROR).send({
            message: "No valid fields to update"
        });
        return;
    }

    const userId = req.params.id;

    try {
        const data = await BookModel.findByIdAndUpdate(userId, updates, { useFindAndModify: false });

        if (!data) {
            res.status(statusCodes.NOT_FOUND_ERROR).send({
                message: "No user found."
            });
        } else {
            res.send({ message: "User updated successfully." });
        }
    } catch (err) {
        res.status(statusCode.BAD_REQUEST_ERROR).send({
            message: err.message
        });
    }
}




async function deleteUser(req, res) {
    const id = req.params.id;
    try {
        const existUser = await User.findById(id);
        if (!existUser) {
            return res.status(statusCodes.NOT_FOUND_ERROR).send({ message: "User does not exist" });
        } else {
            await User.findByIdAndDelete(id);
            return res.status(statusCodes.OK).send({ message: "User deleted successfully" });
        }
    } catch (err) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send({ message: err.message });
    }
}


module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}