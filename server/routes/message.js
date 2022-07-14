import express from 'express';
import auth from '../middleware/auth.js';
import { getMessage, updateMessage, createMessage, deleteMessage } from '../controllers/message.js';

const router = express.Router();

router.get('/', getMessage);
router.patch('/:id', auth, updateMessage);
router.post('/', createMessage);
router.delete('/:id', auth, deleteMessage);

export default router;