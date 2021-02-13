import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createJWT } from "../utils/auth.js";

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const signup = (req, res, next) => {
  let { name, email, password, password_confirmation } = req.body;
  let errors = [];
  if (!name) {
    errors.push({ name: "required" });
  }
  if (!email) {
    errors.push({ email: "required" });
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: "invalid" });
  }
  if (!password) {
    errors.push({ password: "required" });
  }
  if (!password_confirmation) {
    errors.push({
      password_confirmation: "required"
    });
  }
  if (password != password_confirmation) {
    errors.push({ password: "mismatch" });
  }
  if (errors.length > 0) {
    return res.status(422).json({ error: errors[0] });
  }
  User.findOne({ email: email })

    .then(user => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: "email already exists" }] });
      } else {
        const user = new User({
          name: name,
          email: email,
          password: password
        });
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then(response => {
                res.status(200).json({
                  success: true,
                  result: response
                });
              })
              .catch(err => {
                res.status(500).json({
                  errors: [{ error: err }]
                });
              });
          });
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        errors: [{ error: "Something went wrong" }]
      });
    });
};

export const signin = (req, res) => {
  let { email, password } = req.body;
  let errors = [];
  if (!email) {
    errors.push("email is required");
  }

  if (!emailRegexp.test(email)) {
    errors.push("invalid email");
  }

  if (!password) {
    errors.push("password is required");
  }

  if (errors.length > 0) {
    res.status(500).json(errors[0]);
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          errors: ["user not found"]
        });
      } else {
        bcrypt.compare(password, user.password).then(isMatch => {
          if (!isMatch) {
            return res.status(400).json({ errors: [" password incorrect"] });
          }

          const options = { expiresIn: 2592000 };
          const payload = {
            user: user.email,
            id: user._id
          };
          jwt.sign(payload, process.env.TOKEN_SECRET, options, (err, token) => {
            if (err) {
              res.status(500).json({ erros: err.message });
            } else {
              return res.status(200).json({
                success: true,
                token: token,
                message: user
              });
            }
          });
        });
      }
    })
    .catch(err => {
      res.status(500).json({ erros: err });
    });
};
