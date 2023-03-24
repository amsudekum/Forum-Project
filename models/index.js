const User = require('./user');
const forumpost = require('./reply');
const reply = require('./forumpost');

User.hasMany(forumpost, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});
forumpost.hasMany(reply, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

forumpost.belongsTo(User, {
  foreignKey: 'author'
});
reply.belongsTo(User, {
  foreignKey: 'author'
});
reply.belongsTo(forumpost, {
  foreignKey: 'post_id'
});

module.exports = { User, forumpost };


