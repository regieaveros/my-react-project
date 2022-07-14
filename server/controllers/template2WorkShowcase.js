import express from 'express';
import mongoose from 'mongoose';
import WorkShowcase from '../models/template2WorkShowcase.js';

const router = express.Router();

export const getWorkShowcase = async (req, res) => { 

    try {
        const workShowcase = await WorkShowcase.find();
                
        res.status(200).json(workShowcase);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdWorkShowcase = async (req, res) => { 

    const { id } = req.params;

    try {
        const workShowcase = await WorkShowcase.find({ _id: id });
                
        res.status(200).json(workShowcase);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createWorkShowcase = async (req, res) => {

    const { title, tag, image } = req.body;

    try {

        const newWorkShowcase = await WorkShowcase.create({ title, tag, image });

        res.status(201).json(newWorkShowcase);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateWorkShowcase = async (req, res) => {

     let updatedWorkShowcase;

     const { id } = req.params;
     const { title, tag, image } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!image) {
          updatedWorkShowcase = { title, tag, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedWorkShowcase = { title, tag, image, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await WorkShowcase.findByIdAndUpdate(id, updatedWorkShowcase, { new: true });

     res.json(updatedWorkShowcase);

}

export const deleteWorkShowcase = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await WorkShowcase.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;