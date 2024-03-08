const { Comment } = require('../models');

const commentData = [
    {
        "contents": "Wow, cool!.",
        "created_by": 1,
        "related_post": 1 
    },
    {
        "contents": "Exceptional!",
        "created_by": 2,
        "related_post": 2 
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;