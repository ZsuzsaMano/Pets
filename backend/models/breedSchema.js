import mongoose from "mongoose";
const Schema = mongoose.Schema;

const breedSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Breedname is required"],
      unique: true
    },
    type: {
      type: String,
      required: [true, "Type is required"]
    },
    img: {
      type: String
      //required: [true, "Picture is required"]
    },
    size: {
      type: String,
      required: [true, "size is required"]
    },
    personality: {
      type: String,
      required: [true, "Personality description is required"]
    },
    toConsider: {
      type: String
    },
    likeCount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Breed = mongoose.model("breed", breedSchema);

export default Breed;
