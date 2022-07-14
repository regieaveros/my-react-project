import express from 'express';
import auth from '../middleware/auth.js';
import { signin, signup, getUsers, createUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

router.get('/', getUsers);
router.post('/', auth, createUser);
router.patch('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);


export default router;