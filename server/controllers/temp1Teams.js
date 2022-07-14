import express from 'express';
import mongoose from 'mongoose';
import Teams from '../models/temp1Teams.js';

const router = express.Router();

export const getTeams = async (req, res) => { 

    try {
        const teams = await Teams.find();
                
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdTeams = async (req, res) => { 

    const { id } = req.params;

    try {
        const teams = await Teams.find({ _id: id });
                
        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createTeams = async (req, res) => {

    const { name, position, contact, email, description, image } = req.body;

    try {

        const newTeams = await Teams.create({ name, position, contact, email, description, image });

        res.status(201).json(newTeams);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateTeams = async (req, res) => {

    let updatedTeams;

    const { id } = req.params;
    const {name, position, contact, email, description, image } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    if(!image) {
      updatedTeams = { name, position, contact, email, description, _id: id, updatedAt: new Date().toISOString() };
    } else {
      updatedTeams = { name, position, contact, email, description, image, _id: id, updatedAt: new Date().toISOString() };
    }
    
    await Teams.findByIdAndUpdate(id, updatedTeams, { new: true });

    res.json(updatedTeams);

}

export const deleteTeams = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Teams.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;