import express from 'express';
import mongoose from 'mongoose';
import LogoIcon from '../models/logoicon.js';

const router = express.Router();

export const getLogoIcon = async (req, res) => { 

     try {
          const logoIcon = await LogoIcon.find();
                    
          res.status(200).json(logoIcon);
     } catch (error) {
          res.status(404).json({ message: error.message });
     }

}

export const getByIdLogoIcon = async (req, res) => { 

     const { id } = req.params;
 
     try {
         const logoicon = await LogoIcon.find({ _id: id });
                 
         res.status(200).json(logoicon);
     } catch (error) {
         res.status(404).json({ message: error.message });
     }
 
 }

export const createLogoIcon = async (req, res) => {

     const { name, tagline, image, icon } = req.body;

     try {

          const newLogoIcon = await LogoIcon.create({ name, tagline, image, icon });

          res.status(201).json(newLogoIcon);
          
     } catch (error) {
          res.status(409).json({ message: error.message });
     }

}

export const updateLogoIcon = async (req, res) => {

     let updatedLogoIcon;

     const { id } = req.params;
     const { name, tagline, image, icon } = req.body;
     
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

     if (image && icon) {
          updatedLogoIcon = { name, tagline, image, icon, _id: id, updatedAt: new Date().toISOString() };
     }
     if (image && !icon) {
          updatedLogoIcon = { name, tagline, image, _id: id, updatedAt: new Date().toISOString() };
     } 
     if (icon && !image) {
          updatedLogoIcon = { name, tagline, icon, _id: id, updatedAt: new Date().toISOString() };
     }

     if (!icon && !image) {
          updatedLogoIcon = { name, tagline, _id: id, updatedAt: new Date().toISOString() };
     }

     await LogoIcon.findByIdAndUpdate(id, updatedLogoIcon, { new: true });

     res.json(updatedLogoIcon);

}

export const deleteLogoIcon = async (req, res) => {

     const { id } = req.params;
 
     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
 
     await LogoIcon.findByIdAndRemove(id);
 
     res.json({ message: "Post deleted successfully." });
 
 }

export default router;