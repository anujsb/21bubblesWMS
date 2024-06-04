import express from 'express';
import {
  test,
  updateEmployee,
  deleteEmployee,
} from '../controllers/user.employee.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', test);
router.post('/update/:id', verifyToken, updateEmployee);
router.delete('/delete/:id', verifyToken, deleteEmployee);

export default router;
