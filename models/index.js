const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'created_by',
})

Post.belongsTo(User, {
    foreignKey: 'created_by',
})

module.exports = { User, Post };
