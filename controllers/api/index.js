const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const forumpostRoutes = require('./forumpostRoutes');

// router.use('/user', userRoutes);
router.use('/forumpost', forumpostRoutes);

module.exports = router;
