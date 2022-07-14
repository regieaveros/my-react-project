import express from 'express';
import mongoose from 'mongoose';
import BestServices from '../models/template2BestServices.js';

const router = express.Router();

export const getBestServices = async (req, res) => { 

    try {
        const bestServices = await BestServices.find();
                
        res.status(200).json(bestServices);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdBestServices = async (req, res) => { 

    const { id } = req.params;

    try {
        const bestServices = await BestServices.find({ _id: id });
                
        res.status(200).json(bestServices);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createBestServices = async (req, res) => {

    const { name, content, icon } = req.body;

    try {

        const newBestServices = await BestServices.create({ name, content, icon });

        res.status(201).json(newBestServices);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateBestServices = async (req, res) => {

    const { id } = req.params;
    const { name, content, icon } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedBestServices = { name, content, icon, _id: id, updatedAt: new Date().toISOString() };

    await BestServices.findByIdAndUpdate(id, updatedBestServices, { new: true });

    res.json(updatedBestServices);

}

export const deleteBestServices = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await BestServices.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;