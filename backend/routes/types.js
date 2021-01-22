import express from 'express';
import Type from '../models/typeSchema.js';

const router = express.Router();

//@route GET api/type
//@desc GET All type
//@access Public
router.get('/', (req, res)=> {
  Type.find()
  .then(types =>res.json(types));
});

//@route POST api/types
//@desc Create a type
//@access Public
router.post('/', (req, res) => {
  const newType = new Type({
    name: req.body.name,
  });
  newType.save().then(user=>res.json(user));
});

//@route DELETE api/types/:id
//@desc DELETE a type
//@access Public
router.delete('/:id', (req, res) => {
  Type.findById(req.params.id)
  .then(type => type.remove()
  .then(()=> res.json({ success: true })))
  .catch(err=> res.status(404).json({ success: false }));
})
;

export default router;
