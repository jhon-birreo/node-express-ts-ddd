import { Router } from 'express';
import { HealthyController } from '../controller/healthy.controller';

const router = Router();
const healthy = new HealthyController();
router.get('/check', healthy.healthy);
export = router;
