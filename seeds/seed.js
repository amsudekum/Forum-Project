const sequelize = require('../config/connection');
const { Forumpost, User  } = require('../models');

const userData = require('./userData.json');
const ArticleData = require('./ArticleData.json');

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

  process.exit(0);
};

seedDatabase();
