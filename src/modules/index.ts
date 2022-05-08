import express, { Router } from 'express';
import { UserRoute } from './user/user.router';
const router = express.Router();
export const MainRouter = (): Router => {
  router.use('/user', UserRoute());




  return router.use('/api', router);
};
