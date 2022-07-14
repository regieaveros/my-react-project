import express from 'express';
import auth from '../middleware/auth.js';
import { 
     getSocialMedia,
     getByIdSocialMedia,
     updateSocialMedia,
     createSocialMedia,
     deleteSocialMedia,
} from '../controllers/temp1SocialMedia.js';

const router = express.Router();

router.get('/', getSocialMedia);
router.get('/:id', getByIdSocialMedia);
router.patch('/:id', auth, updateSocialMedia);
router.post('/', auth, createSocialMedia);
router.delete('/:id', auth, deleteSocialMedia);

export default router;