import express from 'express';
import { getSoldierTest } from '../controllers/soldier.controller';

const router = express.Router();

router.get('/test', getSoldierTest);

export default router;