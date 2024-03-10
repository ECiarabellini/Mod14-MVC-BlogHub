const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {

// router.get('/:id', withAuth, async (req, res) => {     //removing withAuth for testing. Add back later!
    try {
        const postID = req.params.id;
        const blogpostData = await Post.findByPk(postID, {
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'contents', 'created_by', 'created_at'], // Include only necessary attributes of Comment
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
        
        console.log('blogpostData----------------------------------------', blogpostData)
        const blogPost = blogpostData.get({ plain: true });
        console.log('blogPost----------------------------------------', blogPost)

        // const comments = commentsData.map((comment) => comment.get({ plain: true }));

        // Send over the 'loggedIn' session variable to the 'blogpost' template
        res.render('blogpost', { blogPost, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//create new comment on a post (?) -- need to render page? 
router.post('/comment', async (req, res) => {
// router.post('/comment', withAuth, async (req, res) => {  ///add back when done testing
    try {
        console.log('req.body---------------------', req.body);
        const blogpostData = await Comment.create(req.body);
        // res.render('blogpost', { blogPost, loggedIn: req.session.loggedIn });
        res.json({blogpostData});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;
