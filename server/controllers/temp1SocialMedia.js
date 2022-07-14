import express from 'express';
import mongoose from 'mongoose';
import SocialMedia from '../models/temp1SocialMedia.js';

const router = express.Router();

export const getSocialMedia = async (req, res) => { 

    try {
        const socialMedia = await SocialMedia.find();
                
        res.status(200).json(socialMedia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdSocialMedia = async (req, res) => { 

    const { id } = req.params;

    try {
        const socialMedia = await SocialMedia.find({ _id: id });
                
        res.status(200).json(socialMedia);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createSocialMedia = async (req, res) => {

    const { name, link, icon } = req.body;

    try {

        const newSocialMedia = await SocialMedia.create({ name, link, icon });

        res.status(201).json(newSocialMedia);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateSocialMedia = async (req, res) => {

    const { id } = req.params;
    const { name, link, icon } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedSocialMedia = { name, link, icon, _id: id, updatedAt: new Date().toISOString() };

    await SocialMedia.findByIdAndUpdate(id, updatedSocialMedia, { new: true });

    res.json(updatedSocialMedia);

}

export const deleteSocialMedia = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await SocialMedia.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;