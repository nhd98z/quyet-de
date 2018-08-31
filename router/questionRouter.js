/* jshint esversion: 6 */
(() => {
    'use strict';
})();

const
    express = require('express'),
    Router = express.Router(),
    questionController = require('../controller/questionController');

Router.get('/', (req, res) => {
    questionController.getRandomQuestion((err, data) => {
        if (err) console.log(err);
        if (data && data._id) {
            res.render('question', {
                question: data,
                isAsk: '',
                isQuestion: 'active'
            });
        } else {
            res.render('question', {
                question: null,
                isAsk: '',
                isQuestion: 'active'
            });
        }
    });
});

Router.get('/:id', (req, res) => {
    questionController.getQuestionById(req.params.id, (err, data) => {
        if (err) console.log(err);
        res.render('questionDetail', {
            question: data,
            total: data.yes + data.no,
            yes: (data.yes === 0 && data.no === 0) ? 50 : (100 * data.yes / (data.yes + data.no)).toFixed(2),
            no: (data.no === 0 && data.yes === 0) ? 50 : (100 * data.no / (data.yes + data.no)).toFixed(2),
            isAsk: '',
            isQuestion: 'active'
        });
    });
});

Router.get('/:id/:answer', (req, res) => {
    questionController.updateAnswerQuestion(req.params.id, req.params.answer, (err, data) => {
        if (err) throw err;
        if (data) res.redirect(`/question/${data}`);
    });
});

module.exports = Router;