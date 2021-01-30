import Breed from "../models/breedSchema.js";

export const getBreeds = (req, res) => {
  Breed.find()
    .then(breeds => res.status(200).json(breeds))
    .catch(err => res.status(404).json(err.message));
};

export const postBreed = (req, res) => {
  const newBreed = new Breed(req.body);
  newBreed
    .save()
    .then(breed => res.status(201).json(breed))
    .catch(err => res.status(409).json(err.message));
};

export const deleteBreed = (req, res) => {
  Breed.findById(req.params.id)
    .then(breed => breed.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
};
