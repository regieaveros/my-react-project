import express from 'express';
import { 
     getWorkShowcase,
     getByIdWorkShowcase, 
     createWorkShowcase, 
     updateWorkShowcase, 
     deleteWorkShowcase 
} from '../controllers/template2WorkShowcase.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getWorkShowcase);
router.get('/:id', getByIdWorkShowcase);
router.post('/', auth, createWorkShowcase);
router.patch('/:id', auth, updateWorkShowcase);
router.delete('/:id', auth, deleteWorkShowcase);

export default router;