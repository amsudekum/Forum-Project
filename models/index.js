const User = require('./User');
const Forumpost = require('./Forumpost');
const Reply = require('./Reply');

User.hasMany(Forumpost, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});

Forumpost.belongsTo(User, {
  foreignKey: 'author'
});

Forumpost.hasMany(Reply, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Reply.belongsTo(Forumpost, {
  foreignKey: 'post_id'
});

User.hasMany(Reply, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});

Reply.belongsTo(User, {
  foreignKey: 'author'

});

module.exports = { User, Forumpost, Reply };