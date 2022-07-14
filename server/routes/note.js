import express from 'express';
import auth from '../middleware/auth.js';
import { getNote, getByIdNote, updateNote, createNote, deleteNote } from '../controllers/note.js';

const router = express.Router();

router.get('/', getNote);
router.get('/:id', getByIdNote);
router.patch('/:id', auth, updateNote);
router.post('/', auth, createNote);
router.delete('/:id', auth, deleteNote);

export default router;