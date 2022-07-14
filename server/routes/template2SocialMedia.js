import express from 'express';
import auth from '../middleware/auth.js';
import { 
     getTemp2SocialMedia,
     getByIdTemp2SocialMedia,
     updateTemp2SocialMedia,
     createTemp2SocialMedia,
     deleteTemp2SocialMedia,
} from '../controllers/template2SocialMedia.js';

const router = express.Router();

router.get('/', getTemp2SocialMedia);
router.get('/:id', getByIdTemp2SocialMedia);
router.patch('/:id', auth, updateTemp2SocialMedia);
router.post('/', auth, createTemp2SocialMedia);
router.delete('/:id', auth, deleteTemp2SocialMedia);

export default router;