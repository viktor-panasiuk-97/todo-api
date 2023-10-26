const express = require('express');
const router = express.Router();

router.get('/columns', function (req, res) {
    res.send([
        { id: 1, title: 'To Do'},
        { id: 2, title: 'In Progress'},
        { id: 3, title: 'Done'}
    ])
});

router.post('/columns', function (req, res) {
    res.send({ id: 1})
});

module.exports = router;
