import express from 'express';
import mongoose from 'mongoose';
import Professionals from '../models/template2Professionals.js';

const router = express.Router();

export const getProfessionals = async (req, res) => { 

    try {
        const professionals = await Professionals.find();
                
        res.status(200).json(professionals);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdProfessionals = async (req, res) => { 

    const { id } = req.params;

    try {
        const professionals = await Professionals.find({ _id: id });
                
        res.status(200).json(professionals);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createProfessionals = async (req, res) => {

    const { name, position, image, socialMedia } = req.body;

    try {

        const newProfessionals = await Professionals.create({ name, position, image, socialMedia });

        res.status(201).json(newProfessionals);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateProfessionals = async (req, res) => {

     let updatedProfessionals;

     const { id } = req.params;
     const { name, position, image, socialMedia, } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!image) {
          updatedProfessionals = { name, position, socialMedia, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedProfessionals = { name, position, image, socialMedia, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await Professionals.findByIdAndUpdate(id, updatedProfessionals, { new: true });

     res.json(updatedProfessionals);

}

export const deleteProfessionals = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Professionals.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;