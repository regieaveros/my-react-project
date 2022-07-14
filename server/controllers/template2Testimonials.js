import express from 'express';
import mongoose from 'mongoose';
import Testimonials from '../models/template2Testimonials.js';

const router = express.Router();

export const getTestimonials = async (req, res) => { 

    try {
        const testimonials = await Testimonials.find();
                
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdTestimonials = async (req, res) => { 

    const { id } = req.params;

    try {
        const testimonials = await Testimonials.find({ _id: id });
                
        res.status(200).json(testimonials);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createTestimonials = async (req, res) => {

    const { name, position, image, description, rating } = req.body;

    try {

        const newTestimonials = await Testimonials.create({ name, position, image, description, rating });

        res.status(201).json(newTestimonials);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateTestimonials = async (req, res) => {

     let updatedTestimonials;

     const { id } = req.params;
     const { name, position, image, description, rating } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!image) {
          updatedTestimonials = { name, position, description, rating, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedTestimonials = { name, position, image, description, rating, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await Testimonials.findByIdAndUpdate(id, updatedTestimonials, { new: true });

     res.json(updatedTestimonials);

}

export const deleteTestimonials = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Testimonials.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;