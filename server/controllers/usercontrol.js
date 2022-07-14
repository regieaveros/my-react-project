import express from 'express';
import mongoose from 'mongoose';
import UserControl from '../models/usercontrol.js';

const router = express.Router();

export const getUserControl = async (req, res) => { 

    const sort = { index: 1 };
  
    try {
        const usercontrol = await UserControl.find().sort(sort);
                
        res.status(200).json(usercontrol);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createUserControl = async (req, res) => {

    const { index, type, label, link, iconcode, accesstype, sidelink } = req.body;

    try {

        const newUserControl = await UserControl.create({ index, type, label, link, iconcode, accesstype, sidelink });

        res.status(201).json(newUserControl);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateUserControl = async (req, res) => {

    const { id } = req.params;
    const { index, type, label, link, iconcode, accesstype, sidelink } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedUserControl = { index, type, label, link, iconcode, accesstype, sidelink, _id: id, updatedAt: new Date().toISOString() };

    await UserControl.findByIdAndUpdate(id, updatedUserControl, { new: true });

    res.json(updatedUserControl);

}

export const deleteUserControl = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await UserControl.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;