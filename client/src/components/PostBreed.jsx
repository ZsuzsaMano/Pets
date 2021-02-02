import React, { useContext, useState } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";

const PostBreed = props => {
  const { getBreeds, postBreed, setPostBreed } = useContext(DataContext);

  const addBreed = e => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/breeds/",
        JSON.stringify({
          name: postBreed.name,
          type: postBreed.type,
          size: postBreed.size,
          img: postBreed.img,
          personality: postBreed.personality,
          toConsider: postBreed.toConsider
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => getBreeds())
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setPostBreed(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div className="postBreed">
      <form action="" className="postBreed__form">
        <h3 className="postBreed__title">Add your Pet</h3>
        <select name="type" type="text" onChange={handleChange} required>
          <option value="">Choose type...</option>
          <option value="dogs">Dogs</option>
          <option value="cats">Cats</option>
          <option value="small_animals">Small Animals</option>
        </select>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
          required
        />
        <input
          name="size"
          type="text"
          placeholder="size"
          onChange={handleChange}
          required
        />
        <label htmlFor="img">
          image
          <input
            name="img"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>
        <textarea
          name="personality"
          onChange={handleChange}
          id="personality"
          cols="30"
          rows="4"
          placeholder="personality"
          required
        ></textarea>
        <textarea
          name="toConsider"
          onChange={handleChange}
          id="toConsider"
          cols="30"
          rows="4"
          placeholder="to consider"
          required
        ></textarea>
        <button type="submit" onClick={addBreed}>
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default PostBreed;
