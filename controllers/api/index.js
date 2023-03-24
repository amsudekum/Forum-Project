const router = require('express').Router();
const userRoutes = require('./userRoutes');
const forumpostRoutes = require('./forumpostRoutes');

router.use('/userRoutes', userRoutes);
router.use('/forumpostRoutes', forumpostRoutes);

module.exports = router;
