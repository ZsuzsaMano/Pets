import express from 'express';
import User from '../models/userSchema.js';

const router = express.Router();

//@route GET api/users
//@desc GET All users
//@access Public
router.get('/', (req, res)=> {
  User.find()
  .then(users =>res.json(users));
});

//@route POST api/users
//@desc Create an user
//@access Public
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save().then(user=>res.json(user));
});

//@route DELETE api/users/:id
//@desc DELETE a user
//@access Public
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
  .then(user => user.remove()
  .then(()=> res.json({ success: true })))
  .catch(err=> res.status(404).json({ success: false }));
})
;

export default router;
