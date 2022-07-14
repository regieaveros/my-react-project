import express from 'express';
import auth from '../middleware/auth.js';
import { 
     getTeams,
     getByIdTeams,
     updateTeams,
     createTeams,
     deleteTeams,
} from '../controllers/temp1Teams.js';

const router = express.Router();

router.get('/', getTeams);
router.get('/:id', getByIdTeams);
router.patch('/:id', auth, updateTeams);
router.post('/', auth, createTeams);
router.delete('/:id', auth, deleteTeams);

export default router;