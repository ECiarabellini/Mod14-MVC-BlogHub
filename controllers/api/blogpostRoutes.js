const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/:id', withAuth, async (req, res) => {
    try {
        const blogpostData = await Post.findByPk(req.params.id, {
            include: [
                {
                model: User,
                attributes: [
                    'name',
                ],
                },
            ],
        });
    
        const blogPost = blogpostData.get({ plain: true });

        const commentsData = await Comment.findByPk(req.params.id, {
            include: [
                {
                model: User,
                attributes: [
                    'name',
                ],
                },
            ],
        });
    
        const comments = commentsData.get({ plain: true });



        // Send over the 'loggedIn' session variable to the 'blogpost' template
        res.render('blogpost', { blogPost, comments, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/comment', withAuth, async (req, res) => {
    try {
        const blogpostData = await Comment.create(req.body);
        res.render('blogpost', { blogPost, loggedIn: req.session.loggedIn });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;
