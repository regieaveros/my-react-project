import express from 'express';
import { 
     getTemplate1Products,
     getByIdTemplate1Products, 
     createTemplate1Products, 
     updateTemplate1Products, 
     deleteTemplate1Products 
} from '../controllers/template1Products.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTemplate1Products);
router.get('/:id', getByIdTemplate1Products);
router.post('/', auth, createTemplate1Products,);
router.patch('/:id', auth, updateTemplate1Products);
router.delete('/:id', auth, deleteTemplate1Products);

export default router;