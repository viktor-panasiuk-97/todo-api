const express = require('express');
const router = express.Router();

router.get('/tasks', function (req, res) {
    res.send({ id: 1})
});

router.route('/tasks/:id')
    .get(function (req, res) {
        res.send({ id: 1, title: 'Create API for the todo app via express' })
    }).put(function (req, res) {
        res.send({ id: 2, title: 'Create API for the todo app' })
    }).delete(function (req, res) {
        res.send({ id: 1 })
    });

module.exports = router;
