import express from 'express';
import mongoose from 'mongoose';
import Temp2SocialMedia from '../models/template2SocialMedia.js';

const router = express.Router();

export const getTemp2SocialMedia = async (req, res) => { 

    try {
        const temp2SocialMedia = await Temp2SocialMedia.find();
                
        res.status(200).json(temp2SocialMedia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdTemp2SocialMedia = async (req, res) => { 

    const { id } = req.params;

    try {
        const temp2SocialMedia = await Temp2SocialMedia.find({ _id: id });
                
        res.status(200).json(temp2SocialMedia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createTemp2SocialMedia = async (req, res) => {

    const { name, link, icon } = req.body;

    try {

        const newTemp2SocialMedia = await Temp2SocialMedia.create({ name, link, icon });

        res.status(201).json(newTemp2SocialMedia);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateTemp2SocialMedia = async (req, res) => {

    const { id } = req.params;
    const { name, link, icon } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedTemp2SocialMedia = { name, link, icon, _id: id, updatedAt: new Date().toISOString() };

    await Temp2SocialMedia.findByIdAndUpdate(id, updatedTemp2SocialMedia, { new: true });

    res.json(updatedTemp2SocialMedia);

}

export const deleteTemp2SocialMedia = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Temp2SocialMedia.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;