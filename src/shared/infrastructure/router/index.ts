import { Router } from 'express';
import healthyRouter from '../../../modules/healthcheck/infrastructure/express/router';
import userRouter from '../../../modules/user/infrastructure/express/UserRouter';

const router = Router();

router.use('/healthy', healthyRouter);
router.use('/user', userRouter);

export = router;
