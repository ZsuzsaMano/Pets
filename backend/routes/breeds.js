import express from "express";
import Breed from "../models/breedSchema.js";
import { getBreeds, postBreed, deleteBreed } from "../controllers/breeds.js";
const router = express.Router();

//@route GET api/breeds
//@desc GET All breeds
//@access Public
router.get("/", getBreeds);

//@route POST api/breeds
//@desc Create an breed
//@access Public
router.post("/", postBreed);

//@route DELETE api/users/:id
//@desc DELETE a user
//@access Public
router.delete("/:id", deleteBreed);

export default router;
