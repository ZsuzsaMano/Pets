import express from "express";
import Comment from "../models/commentSchema.js";
import {
  getComments,
  postComment,
  deleteComment
} from "../controllers/comments.js";
const router = express.Router();

//@route GET api/comments
//@desc GET All comments
//@access Public
router.get("/", getComments);

//@route POST api/comments
//@desc Create an comment
//@access Public
router.post("/", postComment);

//@route DELETE api/comments/:id
//@desc DELETE a comment
//@access Public
router.delete("/:id", deleteComment);

export default router;
