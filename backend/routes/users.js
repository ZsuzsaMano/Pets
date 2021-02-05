import express from "express";
import User from "../models/userSchema.js";
import { getUsers, postUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

//@route GET api/users
//@desc GET All users
//@access Public
router.get("/", getUsers);

//@route POST api/users
//@desc Create an user
//@access Public
router.post("/");

//@route PATCH api/users
//@desc update an user
//@access Public
//router.patch("/");

//@route DELETE api/users/:id
//@desc DELETE a user
//@access Public
router.delete("/:id", deleteUser);

export default router;
