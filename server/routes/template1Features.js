import express from 'express';
import { 
     getTemplate1Features,
     getByIdTemplate1Features, 
     createTemplate1Features, 
     updateTemplate1Features, 
     deleteTemplate1Features 
} from '../controllers/template1Features.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTemplate1Features);
router.get('/:id', getByIdTemplate1Features);
router.post('/', auth, createTemplate1Features);
router.patch('/:id', auth, updateTemplate1Features);
router.delete('/:id', auth, deleteTemplate1Features);

export default router;