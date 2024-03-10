const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


//create new comment on a post
//router.post('/', async (req, res) => {    !!!! uncomment for testing in insomnia
router.post('/', withAuth, async (req, res) => {  ///add back when done testing
    try {
        console.log('commentRoutes comment req.body---------------------', req.body);
        const newComment = await Comment.create({
            contents: req.body.contents,
            created_by: req.session.user_id, // comment this out to test in insomnia
            // created_by: req.body.created_by,    ///for testing purposes in insomnia. uncomment to test
            related_post: req.body.related_post,
        });

        res.json({newComment});

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
