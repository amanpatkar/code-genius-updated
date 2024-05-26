import express from "express";
import userController from "./user.controllers.js";

const router = express.Router();
router.get('/getAllUser', userController.getUsers);
router.post('/sign-up', userController.createUsers);
router.post('/login', userController.login);
// router.patch('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

export default router;
