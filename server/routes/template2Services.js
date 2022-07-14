import express from 'express';
import auth from '../middleware/auth.js';
import { 
     getServices,
     getByIdServices,
     updateServices,
     createServices,
     deleteServices,
} from '../controllers/template2Services.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getByIdServices);
router.patch('/:id', auth, updateServices);
router.post('/', auth, createServices);
router.delete('/:id', auth, deleteServices);

export default router;