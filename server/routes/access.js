import express from 'express';
import auth from '../middleware/auth.js';
import { getAccess, getByIdAccess, updateAccess, createAccess, deleteAccess } from '../controllers/access.js';

const router = express.Router();

router.get('/', getAccess);
router.get('/:id', getByIdAccess);
router.patch('/:id', auth, updateAccess);
router.post('/', auth, createAccess);
router.delete('/:id', auth, deleteAccess);

export default router;