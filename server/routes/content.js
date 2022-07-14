import express from 'express';
import auth from '../middleware/auth.js';
import { getContent, getByIdContent, updateContent, createContent, deleteContent } from '../controllers/content.js';

const router = express.Router();

router.get('/', getContent);
router.get('/:id', getByIdContent);
router.patch('/:id', auth, updateContent);
router.post('/', auth, createContent);
router.delete('/:id', auth, deleteContent);

export default router;