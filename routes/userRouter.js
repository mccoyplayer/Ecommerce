import express from "express";
import {
  getAllUser,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} from "../controllers/userController.js";
import authorizePermissions from "../middleware/authorize.js"

const router = express.Router();

router.get("/getAllUser",authorizePermissions,getAllUser);

router.get("/showMe", showCurrentUser);

router.patch("/updateUser", updateUser);

router.patch("/updateUserPassword", updateUserPassword);

router.get("/:id", getSingleUser);

export default router;