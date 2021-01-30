export const getTypes =  (req, res)=> {
  Type.find()
  .then(types =>res.json(types));
};

export const postType = (req, res) => {
  const newType = new Type({
    name: req.body.name,
    img: req.body.img,
  });
  newType.save().then(user=>res.json(user));
};

export const deleteType = (req, res) => {
  Type.findById(req.params.id)
  .then(type => type.remove()
  .then(()=> res.json({ success: true })))
  .catch(err=> res.status(404).json({ success: false }));
};
