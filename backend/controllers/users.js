import User from "../models/userSchema.js";

export const getUsers = (req, res) => {
  User.find()
    .then(userss => res.status(200).json(users))
    .catch(err => res.status(404).json(err.message));
};

export const postUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.status(409).json(err.message));
};

export const deleteUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
};
