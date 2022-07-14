import express from 'express';
import auth from '../middleware/auth.js';
import { getLogoIcon, getByIdLogoIcon, updateLogoIcon, createLogoIcon, deleteLogoIcon } from '../controllers/logoicon.js';

const router = express.Router();

router.get('/', getLogoIcon);
router.get('/:id', getByIdLogoIcon);
router.post('/', auth, createLogoIcon);
router.patch('/:id', auth, updateLogoIcon);
router.delete('/:id', auth, deleteLogoIcon);

export default router;