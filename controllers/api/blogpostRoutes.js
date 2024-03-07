const router = require('express').Router();
const { Post } = require('../../models');
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
        // Send over the 'loggedIn' session variable to the 'gallery' template
        res.render('blogpost', { blogPost, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});





module.exports = router;
