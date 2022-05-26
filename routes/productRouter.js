import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  uploadImage,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";
import authorizePermissions from "../middleware/authorize.js";

const router = express.Router();

router.post("/create",authorizePermissions,createProduct);

router.get("/getAllProduct", getAllProducts);

router.post("/uploadImage",authorizePermissions,uploadImage);

router.get("/:id", getSingleProduct);

router.delete("/:id", authorizePermissions,deleteProduct);

router.patch("/:id", authorizePermissions,updateProduct);

export default router;
