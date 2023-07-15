import { Router } from 'express';
import { UserController } from '../express/UserController';
import { UserSuscribe } from '../../application/use-case/SuscribeUseCase';

const router = Router();
const user = new UserController();
router.get('/', user.findAll);
router.post('/', user.suscribe);
export = router;
