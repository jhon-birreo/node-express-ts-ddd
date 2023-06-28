import { Router } from 'express';
import { UserController } from '../express/UserController';

const router = Router();
const user = new UserController();
router.get('/', user.findAll);
export = router;
