const router = require('express').Router();
const { User } = require('../../models');
const multer = require('multer');
const upload = multer({dest:'../../public/uploads'});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
    try {
        console.log('user name' + req.body.name)
      const userData = await User.findOne({ where: { name: req.body.name } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/upload', upload.single('file'), function(req, res) {
    if (req.file) {
      console.log(req.file);
      res.send('File uploaded successfully');
    } else {
      throw new Error('File upload failed');
    }
  });
  
  router.use(function(err, req, res, next) {
    if (err instanceof multer.MulterError) {
      res.status(400).send('Error uploading file: ' + err.code);
    } else {
      res.status(500).send('Server error: ' + err.message);
    }
  });

module.exports = router;