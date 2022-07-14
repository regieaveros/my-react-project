import express from 'express';
import auth from '../middleware/auth.js';
import { 
     getBestServices,
     getByIdBestServices,
     updateBestServices,
     createBestServices,
     deleteBestServices,
} from '../controllers/template2BestServices.js';

const router = express.Router();

router.get('/', getBestServices);
router.get('/:id', getByIdBestServices);
router.patch('/:id', auth, updateBestServices);
router.post('/', auth, createBestServices);
router.delete('/:id', auth, deleteBestServices);

export default router;