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
    }
}