const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'created_by',
});

Post.belongsTo(User, {
    foreignKey: 'created_by',
});

User.hasMany(Comment, {
    foreignKey: 'created_by',
});

Comment.belongsTo(User, {
    foreignKey: 'created_by',
});

Post.hasMany(Comment, {
    foreignKey: 'related_post',
});

Comment.belongsTo(Post, {
    foreignKey: 'related_post',
});

module.exports = { User, Post, Comment };
