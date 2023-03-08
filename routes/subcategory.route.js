import express from "express";
import {
  addSubCategory,
  updateSubCategory,
  subCategoryList,
  findsubcBScat,
  deleteSubCategoryById,
} from "../controllers/subcategory.controller";
const router = express.Router();
router.post("/addsubcategory", addSubCategory);
router.get("/subcategorylist", subCategoryList);
router.get("/subcategorylistbscat/:categoryId", findsubcBScat);

router.post("/updatesubcategory/:id", updateSubCategory);
router.post("/deletesubcategory/:id", deleteSubCategoryById);

export default router;
