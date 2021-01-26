//import dotenv from 'dotenv';
import express from 'express';
import { DB } from './config/db.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import users from './routes/users.js';
import types from './routes/types.js';
import breeds from './routes/breeds.js';
import authRoutes from './routes/auth.js';

//dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

//connect to mongodb

mongoose.connect(DB, { useNewUrlParser: true,
                      useCreateIndex: true,
                      useUnifiedTopology: true, })
.then(()=> console.log('Mongo Connected...'))
.catch(err => console.log(err));

//use routes
app.use('/api/types', types);
app.use('/api/users', users);
app.use('/api/breeds', breeds);
app.use('/api', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
