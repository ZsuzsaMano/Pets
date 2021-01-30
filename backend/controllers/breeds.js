export const getBreeds = (req, res)=> {
  Breed.find()
  .then(breeds =>res.json(breeds));};

export const postBreed = (req, res) => {
  const newBreed = new Breed({
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    height: req.body.height,
    personality: req.body.personality,
    toConsider: req.body.toConsider,
  });
  newBreed.save().then(breed=>res.json(breed));
};

export const deleteBreed =  (req, res) => {
  Breed.findById(req.params.id)
  .then(breed => breed.remove()
  .then(()=> res.json({ success: true })))
  .catch(err=> res.status(404).json({ success: false }));
};
