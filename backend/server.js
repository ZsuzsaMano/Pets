import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './config/db.js';
import users from './routes/users.js';
import types from './routes/types.js';

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//connect to mongodb

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
.then(()=> console.log('Mongo Connected...'))
.catch(err => console.log(err));

//use routes
app.use('/api/types', types);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
