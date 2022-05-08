import express, { Router } from 'express';
import { UserController } from './controllers/User.controller';
const router = express.Router();
export const UserRoute = (): Router => {
  const userCtrl = new UserController()
  router.get('/import', userCtrl.import);
  return router;
};
