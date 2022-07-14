import express from 'express';
import mongoose from 'mongoose';
import Template1Products from '../models/template1Products.js';

const router = express.Router();

export const getTemplate1Products = async (req, res) => { 

    try {
        const temp1Products = await Template1Products.find();
                
        res.status(200).json(temp1Products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdTemplate1Products = async (req, res) => { 

    const { id } = req.params;

    try {
        const temp1Products = await Template1Products.find({ _id: id });
                
        res.status(200).json(temp1Products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createTemplate1Products = async (req, res) => {

    const { title, content, image, price, originalPrice, pricePercentage } = req.body;

    try {

        const newTemp1Products = await Template1Products.create({ title, content, image, price, originalPrice, pricePercentage });

        res.status(201).json(newTemp1Products);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateTemplate1Products = async (req, res) => {

     let updatedTemp1Products;

     const { id } = req.params;
     const { title, content, image, price, originalPrice, pricePercentage } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!image) {
          updatedTemp1Products = { title, content, price, originalPrice, pricePercentage, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedTemp1Products = { title, content, image, price, originalPrice, pricePercentage, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await Template1Products.findByIdAndUpdate(id, updatedTemp1Products, { new: true });

     res.json(updatedTemp1Products);

}

export const deleteTemplate1Products = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Template1Products.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;