import express, { Router } from 'express';
import UserController from '../controllers/user.controller';

// Creating a instance of the class
const userController = new UserController();

// Initializing express router
const router: Router = express.Router();

router.post('/', userController.createUserHandler);

export default router;
