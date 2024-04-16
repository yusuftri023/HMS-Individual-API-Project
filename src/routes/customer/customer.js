import express from "express";
import {
  changePicture,
  changepassword,
  deleteCustomer,
} from "../../controllers/customer.js";
const router = express.Router();

router.get("/:id");
router.put("/:id/changepicture", changePicture);
router.put("/:id/changepassword", changepassword);
router.delete("/:id", deleteCustomer);

export default router;
