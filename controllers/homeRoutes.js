const router = require('express').Router();
const { Article, User } = require('../models');
const forumpost = require('../models/Forumpost');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {

    res.render('homepage', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {

    res.render('login', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', async (req, res) => {
  try {

    res.render('signup', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;