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

const router = express.Router();

router.route("/").post(regUsers).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUsersById).put(updateUser);

export default router;