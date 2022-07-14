import express from 'express';
import mongoose from 'mongoose';
import Services from '../models/template2Services.js';

const router = express.Router();

export const getServices = async (req, res) => { 

    try {
        const services = await Services.find();
                
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdServices = async (req, res) => { 

    const { id } = req.params;

    try {
        const services = await Services.find({ _id: id });
                
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createServices = async (req, res) => {

    const { name, link, icon } = req.body;

    try {

        const newServices = await Services.create({ name, link, icon });

        res.status(201).json(newServices);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateServices = async (req, res) => {

    const { id } = req.params;
    const { name, link, icon } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedServices = { name, link, icon, _id: id, updatedAt: new Date().toISOString() };

    await Services.findByIdAndUpdate(id, updatedServices, { new: true });

    res.json(updatedServices);

}

export const deleteServices = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Services.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;