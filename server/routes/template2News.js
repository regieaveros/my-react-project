import express from 'express';
import { 
     getNews,
     getByIdNews, 
     createNews, 
     updateNews, 
     deleteNews 
} from '../controllers/template2News.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getNews);
router.get('/:id', getByIdNews);
router.post('/', auth, createNews);
router.patch('/:id', auth, updateNews);
router.delete('/:id', auth, deleteNews);

export default router;