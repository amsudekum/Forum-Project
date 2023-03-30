const router = require('express').Router();
const { Article, User } = require('../models');
const forumpost = require('../models/Forumpost');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {

    res.render('homepage', {  logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {

    res.render('login', { logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/profile', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      return res.redirect('/login');
    }

    const user = req.session.user_id ? await User.findByPk(req.session.user_id) : null;
    console.log(user)
    res.render('profile', { 
      user,
      logged_in: req.session.logged_in
    
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', async (req, res) => {
  try {
    res.render('signup', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/register', async (req, res) => {
  try {
    res.render('signup', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;