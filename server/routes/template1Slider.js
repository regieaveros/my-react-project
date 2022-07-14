import express from 'express';
import { 
     getTemplate1Slider,
     getByIdTemplate1Slider, 
     createTemplate1Slider, 
     updateTemplate1Slider, 
     deleteTemplate1Slider 
} from '../controllers/template1Slider.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTemplate1Slider);
router.get('/:id', getByIdTemplate1Slider);
router.post('/', auth, createTemplate1Slider,);
router.patch('/:id', auth, updateTemplate1Slider);
router.delete('/:id', auth, deleteTemplate1Slider);

export default router;