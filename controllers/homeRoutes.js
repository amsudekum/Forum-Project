const router = require('express').Router();
const { Article, User } = require('../models');
const forumpost = require('../models/forumpost');
const withAuth = require('../utils/auth');

router.get('/', async (req,res)=>{
    try{
        const forumPostData = await forumpost.findAll({
            include:[
                {
                    model:User,
                    attributes:['name'],
                },
            ],
        });
        const forumposts = forumPostData.map((forumpost) => forumpost.get({plain:true}));
        res.render('homepage', {
            forumposts,
            logged_in: req.session.logged_in
        
        });
    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;