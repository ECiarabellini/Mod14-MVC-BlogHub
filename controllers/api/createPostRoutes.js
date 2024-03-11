const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE new post
router.post('/', withAuth, async (req, res) => {
    console.log(req);
    try {
        const newPost = await Post.create({
            title: req.body.title,
            contents: req.body.contents,
            created_by: req.session.user_id,   // !!!!! comment this out when done testing in Insomnia
            // created_by: req.body.created_by,       // !!!! uncomment this out when done testing in Insomnia

        });
        console.log(newPost);
        res.status(201).json(newPost);
    } catch (err) {
        console.log(err);
    }
});

// Export router
module.exports = router;