import express from 'express';

const router = express.Router();

// INDEX hhtp://localhost:5555/posts
router.get('/', index)

// SHOW hhtp://localhost:5555/posts/1
router.get('/:id', show);

// CREATE
router.post('/', create)

export default router