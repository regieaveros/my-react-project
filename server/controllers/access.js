import express from 'express';
import mongoose from 'mongoose';
import Access from '../models/access.js';

const router = express.Router();

export const getAccess = async (req, res) => { 

    try {
        const access = await Access.find();
                
        res.status(200).json(access);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdAccess = async (req, res) => { 

    const { id } = req.params;

    try {
        const access = await Access.find({ _id: id });
                
        res.status(200).json(access);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createAccess = async (req, res) => {

    const { value } = req.body;

    try {

        const newAccess = await Access.create({ type: value });

        res.status(201).json(newAccess);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateAccess = async (req, res) => {

    const { id } = req.params;
    const { value } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedAccess = { type: value, _id: id, updatedAt: new Date().toISOString() };

    await Access.findByIdAndUpdate(id, updatedAccess, { new: true });

    res.json(updatedAccess);

}

export const deleteAccess = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Access.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;