import express from 'express';
import mongoose from 'mongoose';
import Message from '../models/message.js';

const router = express.Router();

export const getMessage = async (req, res) => { 

    try {
        const message = await Message.find();
                
        res.status(200).json(message);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createMessage = async (req, res) => {

    const { fullname, email, subject, message } = req.body;

    try {

        const newMessage = await Message.create({ fullname, email, subject, message });

        res.status(201).json(newMessage);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateMessage = async (req, res) => {

    const { id } = req.params;
    const { fullname, email, subject, message } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedMessage = { fullname, email, subject, message, _id: id, updatedAt: new Date().toISOString() };

    await Message.findByIdAndUpdate(id, updatedMessage, { new: true });

    res.json(updatedMessage);

}

export const deleteMessage = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Message.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;