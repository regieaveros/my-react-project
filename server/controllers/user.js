import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/user.js';
//import dotenv from 'dotenv';

//dotenv.config();

export const signin = async (req, res) => {

    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect  = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {

        res.status(500).json({ message: 'Something went wrong.' });

    }
}

export const signup = async (req, res) => {

    const { email, password, confirmPassword, name } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });

    } catch (error) {
        
        res.status(500).json({ message: 'Something went wrong.' });

    }
    
}

export const getUsers = async (req, res) => { 

    try {

        const userData = await User.find();    
        res.status(200).json(userData);

    } catch (error) {

        res.status(404).json({ message: error.message });

    }

}

export const createUser = async (req, res) => {
    
    const { name, email, type, password, confirmPassword } = req.body;
    const date = new Date().toISOString();

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({ message: "User already exists." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name, type, createdAt: date, updatedAt: date });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });

    } catch (error) {
        
        res.status(500).json({ message: 'Something went wrong.' });

    }

}

export const updateUser = async (req, res) => {

    const { id } = req.params;
    const { name, email, type, password, confirmPassword, checked } = req.body;
    let updatedUser;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    if(checked === true) {

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);
        if(!!type){
            updatedUser = { name, email, password: hashedPassword, _id: id, updatedAt: new Date().toISOString(), type };
        } else {
            updatedUser = { name, email, password: hashedPassword, _id: id, updatedAt: new Date().toISOString() };
        }
        await User.findByIdAndUpdate(id, updatedUser, { new: true });
        res.json(updatedUser);

    }

    if(checked === false) {

        if(!!type) {
            updatedUser = { name, email, _id: id, updatedAt: new Date().toISOString(), type };
        } else {
            updatedUser = { name, email, _id: id, updatedAt: new Date().toISOString() };
        }
        await User.findByIdAndUpdate(id, updatedUser, { new: true });
        res.json(updatedUser);

    }

}

export const deleteUser = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}
