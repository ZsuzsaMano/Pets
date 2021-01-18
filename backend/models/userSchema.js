import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
      },
    secondName: {
        type: String,
      },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
      },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
    isAdmin: {
        type: Boolean,
        required: true,
        defualt: false,
      },
  }, {
    timestamps: true,
  });

const User = mongoose.model('user', userSchema);

export default User;
