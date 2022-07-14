import express from 'express';
import auth from '../middleware/auth.js';
import { getUserControl, createUserControl, updateUserControl, deleteUserControl } from '../controllers/usercontrol.js';

const router = express.Router();

router.get('/', getUserControl);
router.post('/', auth, createUserControl);
router.patch('/:id', auth, updateUserControl);
router.delete('/:id', auth, deleteUserControl);

export default router;