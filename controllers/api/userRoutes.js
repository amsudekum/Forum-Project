const router = require('express').Router();
const { User } = require('../../models');
const multer = require('multer');
const bcrypt = require('bcrypt')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
  
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({storage:storage});

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
      const userData = await User.findOne({ where: { name: req.body.name } });
  console.log(userData)
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  console.log("valid"+validPassword)
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
        console.log(err);
        res.status(400).json(err);
    }
  });



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
        res.redirect('/')
    });
  } else {
    res.status(404).end();
  }
});


router.post('/upload', upload.single('file'), async function(req, res) {
    try {
      if (req.file) {
        console.log(req.file);
        const user = await User.findByPk(req.session.user_id);
        user.avatar = req.file.filename;
        await user.save();
        req.session.regenerate((err) => {
            if (err) throw err;
            req.session.logged_in = true;
            req.session.user_id = user.id;
            req.session.user = user.toJSON();
            res.redirect('/profile');
          });

    

      } else {
        throw new Error('File upload failed');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });

module.exports = router;