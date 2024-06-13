import ensureAuthenticated from '@shared/infra/http/middlewares/EnsureAuthenticated';
import { Router } from 'express';

import UsersController from '../controller/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/register', usersController.create);

usersRoutes.patch('/update', ensureAuthenticated, usersController.update);

export default usersRoutes;
