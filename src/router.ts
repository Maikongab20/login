import { Router } from "express";
import { AuthenticateUserController } from "./controller/authenticateUserController";
import { UserController } from "./controller/UserController";
const router = Router();

const userController = new UserController();
const authenticateUserController = new AuthenticateUserController();

router.post('/createUser',userController.handle);
router.post('/login',authenticateUserController.handle);


export { router };
