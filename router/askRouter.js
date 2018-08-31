/* jshint esversion: 6 */
(() => {
    'use strict';
})();

const
    express = require('express'),
    Router = express.Router(),
    questionController = require('../controller/questionController');

Router.get('/', (req, res) => {
    res.render('ask', {
        isAsk: 'active',
        isQuestion: ''
    });
});

Router.post('/', (req, res) => {
    questionController.addQuestion(req.body.question, (err, id) => {
        if (err) throw err;
        res.redirect('/');
    });
});

module.exports = Router;