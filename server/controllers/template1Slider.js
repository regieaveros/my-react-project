import express from 'express';
import mongoose from 'mongoose';
import Template1Slider from '../models/template1Slider.js';

const router = express.Router();

export const getTemplate1Slider = async (req, res) => { 

    try {
        const temp1Slider = await Template1Slider.find();
                
        res.status(200).json(temp1Slider);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdTemplate1Slider = async (req, res) => { 

    const { id } = req.params;

    try {
        const temp1Slider = await Template1Slider.find({ _id: id });
                
        res.status(200).json(temp1Slider);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createTemplate1Slider = async (req, res) => {

    const { title, content, watermark } = req.body;

    try {

        const newTemp1Slider = await Template1Slider.create({ title, content, watermark });

        res.status(201).json(newTemp1Slider);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateTemplate1Slider = async (req, res) => {

     let updatedTemp1Slider;

     const { id } = req.params;
     const { title, content, watermark } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!watermark) {
          updatedTemp1Slider = { title, content, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedTemp1Slider = { title, content, watermark, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await Template1Slider.findByIdAndUpdate(id, updatedTemp1Slider, { new: true });

     res.json(updatedTemp1Slider);

}

export const deleteTemplate1Slider = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Template1Slider.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;