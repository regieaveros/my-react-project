import express from 'express';
import { 
     getProfessionals,
     getByIdProfessionals, 
     createProfessionals, 
     updateProfessionals, 
     deleteProfessionals 
} from '../controllers/template2Professionals.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProfessionals);
router.get('/:id', getByIdProfessionals);
router.post('/', auth, createProfessionals);
router.patch('/:id', auth, updateProfessionals);
router.delete('/:id', auth, deleteProfessionals);

export default router;