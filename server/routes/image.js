import express from 'express';
import auth from '../middleware/auth.js';
import { getImages, updateImage, createImage, deleteImage } from '../controllers/image.js';

const router = express.Router();

router.get('/', getImages);
router.patch('/:id', auth, updateImage);
router.post('/', auth, createImage);
router.delete('/:id', auth, deleteImage);

export default router;
