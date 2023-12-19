import express from 'express';
import { getSoldierAccessories, getSoldierUpdates, getSoldierAssets, getSoldierCookie } from '../controllers/soldier.controller';

const router = express.Router();

router.get('/accessories', getSoldierAccessories);

router.get('/updates', getSoldierUpdates);

router.get('/assets', getSoldierAssets);

router.get('/cookie', getSoldierCookie);

export default router;