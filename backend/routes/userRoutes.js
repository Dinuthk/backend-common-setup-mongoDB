import express from "express";
import { 
    authUser,
    regUsers,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUsersById,
    deleteUser,
    updateUser
 } from "../controller/userController.js";

 import { protect, admin } from "../middleware/authMiddleware.js";
 
const router = express.Router();

router.route("/").post(regUsers).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router.route("/profile").get( protect, getUserProfile).put(protect,updateUserProfile);
router.route("/:id").delete(protect, admin, deleteUser).get(protect, admin, getUsersById).put(protect, admin, updateUser);

export default router;