const router = require('express').Router();
const { Article, User } = require('../models');
const forumpost = require('../models/forumpost');
const withAuth = require('../utils/auth');




module.exports = router;