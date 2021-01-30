import express from "express";
import Type from "../models/typeSchema.js";
import { getTypes, postType, deleteType } from "../controllers/types.js";
const router = express.Router();

//@route GET api/type
//@desc GET All type
//@access Public
router.get("/", getTypes);

//@route POST api/types
//@desc Create a type
//@access Public
router.post("/", postType);

//@route DELETE api/types/:id
//@desc DELETE a type
//@access Public
router.delete("/:id", deleteType);

export default router;
