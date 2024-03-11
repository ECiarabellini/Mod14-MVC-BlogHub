const { Post } = require('../models');
const sequelize = require('../config/connection');

const postdata = [
  {
    "title": "6Lorem Ipsum",
    "contents": "6Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "created_by": 6
  },
  {
    "title": "6Excepteur ",
    "contents": "6Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "created_by": 6
  }
];

const seeduser6posts = () => Post.bulkCreate(postdata);
seeduser6posts();