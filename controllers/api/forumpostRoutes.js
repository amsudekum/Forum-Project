const router = require('express').Router();
const { Forumpost } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req,res)=>{
//     try{
//         const forumPostData = await forumpost.findAll({
//             include:[
//                 {
//                     model:User,
//                     attributes:['name'],
//                 },
//             ],
//         });
//         const forumposts = forumPostData.map((forumpost) => forumpost.get({plain:true}));
//         res.render('homepage', {
//             forumposts,
//             logged_in: req.session.logged_in
        
//         });
//     } catch(err){
//         res.status(500).json(err);
//     }
// });

// router.get('/forumpost/:id', async (req, res) => {
//     try {
//       const forumpostData = await forumpost.findByPk(req.params.id, {
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       const forumpost = forumpostData.get({ plain: true });
  
//       res.render('forumpost', {
//         ...forumpost,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newForumpost = await forumpost.create({
//         ...req.body,
//         author: req.session.user_id,
//       });
  
//       res.status(200).json(newForumpost);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });
// router.post('/reply', withAuth, async (req, res) => {
//     try {
//       const newReply = await reply.create({
//         ...req.body,
//         post_id: req.session.user_id,
//       });
  
//       res.status(200).json(newReply);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });

router.get('/topic/:topic', async (req, res) => {
  try {
    const forumpostData = await Forumpost.findAll({
      where: {
        topic: req.params.topic,
      },
    });

    const forumposts = forumpostData.map((forumpost) => forumpost.get({ plain: true }));

    res.render('topic', {
      forumposts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;