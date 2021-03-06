import express from "express";
import Breed from "../models/breedSchema.js";
import { getBreeds, postBreed, deleteBreed } from "../controllers/breeds.js";
const router = express.Router();
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

var upload = multer({ storage: storage, limits: { fileSize: 1000000 } });

//@route GET api/breeds
//@desc GET All breeds
//@access Public
router.get("/", getBreeds);

//@route POST api/breeds
//@desc Create an breed
//@access Public
router.post("/", upload.single("img"), postBreed);

//@route DELETE api/breed/:id
//@desc DELETE a breed
//@access Public
router.delete("/:id", deleteBreed);

export default router;
