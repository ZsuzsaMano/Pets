import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
      },
    img: {
        type: String,
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
    myAnimals: {
        type: String,
      },
    myComments: {
          type: String,
        },

  },
   {
    timestamps: true,
  });

const User = mongoose.model('user', userSchema);

export default User;
