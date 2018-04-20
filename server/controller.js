const axios = require('axios');


module.exports = {
    addUser : (req, res) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance. ADD_USER([username, password]).then((result) => {
            res.status(200).send(result[0]);
        }).catch((e) => {
            console.log(e);
            res.sendStatus(500);
        })
    },

    login : (req, res) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance.GET_USER([username, password]).then((user) => {
            res.status(200).send(user[0]);
            console.log(user[0]);
        }).catch((e) => {
            console.log(e);
            res.sendStatus(500);
        })
    },

    getPost : (req, res) => {
        const dbInstance = req.app.get('db');
        const {userid} = req.params;
        const {userposts, search} = req.query;

        if(userposts && search !== ''){
            dbInstance.GET_USER_POST_SEARCH([userid, search]).then((post) => {
                res.status(200).send(post[0]);
                console.log(post[0]);
            }).catch((e)=> {
                console.log(e);
                res.sendStatus(500);
            })
        } else if (!userposts && search === ''){
            dbInstance.GET_POSTS_NOSEARCH([userid]).then((posts) => {
                res.status(200).send(posts);
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500);
            })
        } else if(!userposts && search !== ''){
            dbInstance.GET_POSTS_SEARCH([userid, search]).then((posts) => {
                res.status(200).send(posts);
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500);
            })
        } else if (userposts && search === ''){
            dbInstance.GET_ALL_POSTS().then((posts) => {
                res.status(200).send(posts);
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500);
            })
        }
    }
}