const sequelize = require('../config/connection');
const { Forumpost, User, Reply } = require('../models');

const userData = require('./userData.json');
const ArticleData = require('./ArticleData.json');
const replies = require('./replyData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const forumpost of ArticleData) {
    await Forumpost.create({
      ...forumpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const reply of replies) {
    await Reply.create({
      ...reply,
      author: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
