import express from 'express';
const { signup, signin } from'../controllers/auth';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
