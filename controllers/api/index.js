const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const createPostRoutes = require('./createPostRoutes');


router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/createPost', createPostRoutes);

module.exports = router;
