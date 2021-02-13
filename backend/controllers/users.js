import User from "../models/userSchema.js";

export const getUsers = (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json(err.message));
};

export const postUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.status(409).json(err.message));
};

export const updateUser = (req, res) => {
  if (req.body.myFavorites) {
    User.updateOne(
      { _id: req.params.id },
      { $set: { myFavorites: JSON.stringify(req.body.myFavorites) } }
    )
      .then(WriteResult => res.json(WriteResult))
      .catch(err => res.status(404).json(err.writeError));
  } else {
    User.updateOne(
      { _id: req.params.id },
      {
        $set: { name: req.body.name, email: req.body.email, img: req.body.img }
      }
    )
      .then(WriteResult => res.json(WriteResult))
      .catch(err => res.status(404).json(err.writeError));
  }
};

export const deleteUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json(err.message));
};
