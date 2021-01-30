import mongoose from "mongoose";
const Schema = mongoose.Schema;

const typeSchema = new Schema({
  type: {
    type: String,
    required: [true, "Typename is required"],
    unique: true
  },
  img: {
    type: String,
    required: [true, "Image is required"]
  }
});

const Type = mongoose.model("type", typeSchema);

export default Type;
