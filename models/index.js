const User = require('./User');
const Forumpost = require('./Forumpost');
const Reply = require('./Reply');

User.hasMany(Forumpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Forumpost.belongsTo(User, {
  foreignKey: 'user_id'
});

Forumpost.hasMany(Reply, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Reply.belongsTo(Forumpost, {
  foreignKey: 'post_id'
});

User.hasMany(Reply, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

Reply.belongsTo(User, {
  foreignKey: 'author_id'
});

module.exports = { User, Forumpost, Reply };