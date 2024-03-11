const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

//homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

//login page
router.get('/login', (req, res) => {
  // If a session exists, redirect to the dashboard
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});


//one post detail page including comments
//router.get('/blogpost/:id', async (req, res) => { ///!!!!!!!!!!!!use for testing in Insomnia withoutAuth
router.get('/blogpost/:id', withAuth, async (req, res) => {     //removing withAuth for testing. Add back later!
  try {
    const postID = req.params.id;
    const blogpostData = await Post.findByPk(postID, {
      include: [
        {
          model: Comment,
          attributes: ['id', 'contents', 'created_by', 'created_at'], // Include necessary attributes of Comment
          include: [
              {
                  model: User,
                  attributes: ['name'], // Include the 'name' field from the 'Users' table
              },
          ],
        },
        {
            model: User,
            attributes: ['name'], // Include the 'name' field from the 'Users' table
        },
      ],
    });    
    
    if (!blogpostData) {
      return res.status(404).json('BlogpostData not found!');
    }
    const blogPost = blogpostData.get({ plain: true });
    
    // Send over the 'loggedIn' session variable to the 'blogpost' template
    res.render('blogpost', { blogPost, logged_in: req.session.logged_in });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});


// dashboard page
//router.get('/dashboard', async (req, res) => {    ///!!!!!!!!!!!!use for testing in Insomnia withoutAuth
router.get('/dashboard', withAuth, async (req, res) => { 
  const userPosts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      where: {
        created_by: req.session.user_id,   //comment out for testing in insomnia !!!!!!!!!!!
        // created_by: req.body.created_by   //uncomment for testing in insomnia !!!!!
      }
    });
  
  const posts = userPosts.map((post) => post.get({ plain: true }));
  res.render('dashboard', { posts, logged_in: req.session.logged_in });


});


module.exports = router;