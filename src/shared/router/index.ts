import { Router } from 'express';
import healthyRouter from '../../feature/healthcheck/infrastructure/express/router';

const router = Router();

router.use('/healthy', healthyRouter);

export = router;
