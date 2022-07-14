import express from 'express';
import mongoose from 'mongoose';
import Template1Features from '../models/template1Features.js';

const router = express.Router();

export const getTemplate1Features = async (req, res) => { 

    try {
        const temp1Features = await Template1Features.find();
                
        res.status(200).json(temp1Features);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdTemplate1Features = async (req, res) => { 

    const { id } = req.params;

    try {
        const temp1Features = await Template1Features.find({ _id: id });
                
        res.status(200).json(temp1Features);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createTemplate1Features = async (req, res) => {

    const { title, content, image } = req.body;

    try {

        const newTemp1Features = await Template1Features.create({ title, content, image });

        res.status(201).json(newTemp1Features);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateTemplate1Features = async (req, res) => {

     let updatedTemp1Features;

     const { id } = req.params;
     const { title, content, image } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!image) {
          updatedTemp1Features = { title, content, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedTemp1Features = { title, content, image, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await Template1Features.findByIdAndUpdate(id, updatedTemp1Features, { new: true });

     res.json(updatedTemp1Features);

}

export const deleteTemplate1Features = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Template1Features.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;