import express from 'express';
import {
  test,
  updateManager,
  deleteManager,
} from '../controllers/user.manager.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateManager);
router.delete('/delete/:id', verifyToken, deleteManager);

export default router;
