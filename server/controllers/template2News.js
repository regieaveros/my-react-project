import express from 'express';
import mongoose from 'mongoose';
import News from '../models/template2News.js';

const router = express.Router();

export const getNews = async (req, res) => { 

    try {
        const news = await News.find();
                
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const getByIdNews = async (req, res) => { 

    const { id } = req.params;

    try {
        const news = await News.find({ _id: id });
                
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const createNews = async (req, res) => {

    const { title, tag, image } = req.body;

    try {

        const newNews = await News.create({ title, tag, image });

        res.status(201).json(newNews);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const updateNews = async (req, res) => {

     let updatedNews;

     const { id } = req.params;
     const { title, tag, image } = req.body;
    
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if(!image) {
          updatedNews = { title, tag, _id: id, updatedAt: new Date().toISOString() };
     } else {
          updatedNews = { title, tag, image, _id: id, updatedAt: new Date().toISOString() };
     }
     
     await News.findByIdAndUpdate(id, updatedNews, { new: true });

     res.json(updatedNews);

}

export const deleteNews = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await News.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });

}

export default router;