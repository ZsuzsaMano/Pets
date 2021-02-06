import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    chatName: {
      type: String,
      required: [true, "name is required"]
    },
    comment: {
      type: String,
      required: [true, "comment is required"]
    },
    userId: {
      type: String
    },
    breedId: {
      type: String
    },
    breedName: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
