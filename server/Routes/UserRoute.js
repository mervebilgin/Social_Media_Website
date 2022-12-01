import express from "express";
import { deleteUser, followUser, getUser, UnFollowUser, updateUser, getAllUsers } from "../Controllers/UserController.js";
import authMiddleWare from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', authMiddleWare, updateUser)
router.delete('/:id', authMiddleWare, deleteUser)
router.put('/:id/follow', authMiddleWare, followUser)
router.put('/:id/unfollow', authMiddleWare, UnFollowUser)
export default router;