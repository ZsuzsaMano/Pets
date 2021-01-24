import express from 'express';
import Breed from '../models/breedSchema.js';

const router = express.Router();

//@route GET api/users
//@desc GET All users
//@access Public
router.get('/', (req, res)=> {
  Breed.find()
  .then(breeds =>res.json(breeds));
});

//@route POST api/users
//@desc Create an user
//@access Public
router.post('/', (req, res) => {
  const newBreed = new Breed({
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    height: req.body.height,
    personality: req.body.personality,
    toConsider: req.body.toConsider,
  });
  newBreed.save().then(breed=>res.json(breed));
});

//@route DELETE api/users/:id
//@desc DELETE a user
//@access Public
router.delete('/:id', (req, res) => {
  Breed.findById(req.params.id)
  .then(breed => breed.remove()
  .then(()=> res.json({ success: true })))
  .catch(err=> res.status(404).json({ success: false }));
})
;

export default router;
