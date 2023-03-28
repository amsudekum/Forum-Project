const router = require('express').Router();
const { Article, User } = require('../models');
const forumpost = require('../models/Forumpost');
const withAuth = require('../utils/auth');

const topic = 

router.get('/`${topic}`', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('`${topic}`', { 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;