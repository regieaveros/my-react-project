import express from 'express';
import mongoose from 'mongoose';
import Image from '../models/image.js';

const router = express.Router();

export const getImages = async (req, res) => { 

    try {
        const image = await Image.find();
                
        res.status(200).json(image);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createImage = async (req, res) => {

    const { title, image } = req.body;

    try {

        const newImage = await Image.create({ title, image });

        res.status(201).json(newImage);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateImage = async (req, res) => {

    let updatedImage;

    const { id } = req.params;
    const { title, image } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    if (!image) {
        updatedImage = { title, _id: id, updatedAt: new Date().toISOString() };
    } else {
        updatedImage = { title, image, _id: id, updatedAt: new Date().toISOString() };
    }

    await Image.findByIdAndUpdate(id, updatedImage, { new: true });

    res.json(updatedImage);

}

export const deleteImage = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Image.findByIdAndRemove(id);

    res.json({ message: "Image deleted successfully." });

}

export default router;