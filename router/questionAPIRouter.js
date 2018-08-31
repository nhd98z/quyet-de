/* jshint esversion: 6 */
(() => {
    'use strict';
})();

const
    express = require('express'),
    Router = express.Router(),
    questionController = require('../controller/questionController');

Router.post('/', (req, res) => {
    questionController.getRandomQuestion((err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

module.exports = Router;