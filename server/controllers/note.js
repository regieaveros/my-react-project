import express from 'express';
import mongoose from 'mongoose';
import Note from '../models/note.js';

const router = express.Router();

export const getNote = async (req, res) => { 

    try {
        const note = await Note.find();
                
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdNote = async (req, res) => { 

    const { id } = req.params;

    try {
        const note = await Note.find({ _id: id });
                
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createNote = async (req, res) => {

    const { title, message, image } = req.body;

    try {

        const newNote = await Note.create({ title, message, image });

        res.status(201).json(newNote);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateNote = async (req, res) => {

    let updatedNote;

    const { id } = req.params;
    const { title, message, image } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    if (!image) {
        updatedNote = { title, message, _id: id, updatedAt: new Date().toISOString() };
    } else {
        updatedNote = { title, message, image, _id: id, updatedAt: new Date().toISOString() };
    }
   
    await Note.findByIdAndUpdate(id, updatedNote, { new: true });

    res.json(updatedNote);

}

export const deleteNote = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Note.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;