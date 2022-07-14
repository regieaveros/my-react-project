import express from 'express';
import { 
     getTestimonials,
     getByIdTestimonials, 
     createTestimonials, 
     updateTestimonials, 
     deleteTestimonials 
} from '../controllers/template2Testimonials.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTestimonials);
router.get('/:id', getByIdTestimonials);
router.post('/', auth, createTestimonials);
router.patch('/:id', auth, updateTestimonials);
router.delete('/:id', auth, deleteTestimonials);

export default router;