import express from 'express';
import mongoose from 'mongoose';
import Content from '../models/content.js';

const router = express.Router();

export const getContent = async (req, res) => { 

    try {
        const content = await Content.find();
                
        res.status(200).json(content);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdContent = async (req, res) => { 

    const { id } = req.params;

    try {
        const content = await Content.find({ _id: id });
                
        res.status(200).json(content);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createContent = async (req, res) => {

    const { title, content } = req.body;

    try {

        const newContent = await Content.create({ title, content });

        res.status(201).json(newContent);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateContent = async (req, res) => {

    const { id } = req.params;
    const { title, content } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedContent = { title, content, _id: id, updatedAt: new Date().toISOString() };

    await Content.findByIdAndUpdate(id, updatedContent, { new: true });

    res.json(updatedContent);

}

export const deleteContent = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Content.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;