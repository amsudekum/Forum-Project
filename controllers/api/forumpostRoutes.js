const router = require('express').Router();
const { Forumpost, Reply } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/topic/:topic', async (req, res) => {
  try {
    const forumpostData = await Forumpost.findAll({
      where: {
        topic: req.params.topic,
      },
    });

    const forumposts = forumpostData.map((forumpost) => forumpost.get({ plain: true }));
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
    // Find all Replies associated with the Forumpost
    const replyData = await Reply.findAll({ where: { post_id: req.params.post_id } });
    const replies = replyData.map((reply) => reply.get({ plain: true }));
console.log(forumpost)
console.log(replies)
    // Render the "thread" view with the Forumpost and its Replies as context
    res.render('thread', { forumpost, replies,logged_in: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/create', async (req, res) => {
  console.log(req.body)
  try {
    const newForumpost = await Forumpost.create(req.body

    );

    res.status(200).json(newForumpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;