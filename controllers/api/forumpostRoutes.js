const router = require('express').Router();
const { Forumpost, Reply, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/topic/:topic', async (req, res) => {
  try {
    const forumpostData = await Forumpost.findAll({
      where: {
        topic: req.params.topic
      },
      include: { model: User, attributes: ['name', 'avatar'] }
    });

    const forumposts = forumpostData.map((forumpost) => forumpost.get({ plain: true }));
    console.log(forumposts)
const topic = req.params.topic
    res.render('topic', {
      forumposts,
      topic,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/topic/thread/:post_id', async (req, res) => {
  try {
    // Find the Forumpost with the given post_id
    const forumpostData = await Forumpost.findByPk(req.params.post_id);
    const forumpost = forumpostData.get({ plain: true });

    // Find all Replies associated with the Forumpost, including the User model
    const replyData = await Reply.findAll({
      where: { post_id: req.params.post_id },
      include: { model: User, attributes: ['name', 'avatar'] }
    });
    const replies = replyData.map((reply) => reply.get({ plain: true }));
console.log(replies)
    // Render the "thread" view with the Forumpost and its Replies as context
    res.render('thread', { forumpost, replies, logged_in: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/create', async (req, res) => {
  try {
    console.log(req.body)
    const newForumpost = await Forumpost.create({
      ...req.body,
      author: req.session.user_id // set user_id to req.session.user_id
    });

    res.status(200).json(newForumpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/create/reply', async (req, res) => {
  try {
    const newReply = await Reply.create(req.body);

    res.status(200).json(newReply);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;