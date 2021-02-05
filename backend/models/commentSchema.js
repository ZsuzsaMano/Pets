import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    chatName: {
      type: String,
      required: [true, "name is required"],
      unique: true
    },
    message: {
      type: String,
      required: [true, "message is required"]
    },
    userId: {
      type: String
    },
    breedId: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
