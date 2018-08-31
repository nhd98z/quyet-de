/* jshint esversion: 6 */
(() => {
    'use strict';
})();

const questionSchema = require('../model/questionModel');

const addQuestion = async (question, onComplete) => {
    let newQuestion = {
        question: question
    };
    try {
        let question = await questionSchema.create(newQuestion);
        onComplete(null, question._id);
    } catch (err) {
        onComplete(err, null);
    }
};

const getRandomQuestion = async (onComplete) => {
    try {
        let questionList = await questionSchema.find({});
        let randomQuestionId = Math.floor(Math.random() * questionList.length);
        onComplete(null, questionList[randomQuestionId]);
    } catch (err) {
        onComplete(err, null);
    }
};

// /**
//  * callback version
//  * @param {String} id id of question
//  * @param {'yes' | 'no'} answer 'yes' or 'no'
//  * @param {(err, data) => void} onUpdateComplete call this function after updating question
//  */
// const updateAnswerQuestion = (id, answer, onUpdateComplete) => {
//     questionSchema.findById(id, (err, res) => {
//         if (err) {
//             callback(err);
//         } else {
//             let question = res;
//             if (answer === 'yes') question.yes++;
//             if (answer === 'no') question.no++;
//             question.save((err) => {
//                 if (err) onUpdateComplete(err, null);
//                 onUpdateComplete(null, question._id);
//             });
//         }
//     });
// };

// /**
//  * questionSchema.findById(id) return a promise
//  * .then call that promise, and its parameters is what that promise return
//  * @param {String} id id of question
//  * @param {'yes' | 'no'} answer 'yes' or 'no'
//  * @param {(err, data) => void} onUpdateComplete call this function after updating question
//  */
// const updateAnswerQuestion = (id, answer, onUpdateComplete) => {
//     questionSchema.findById(id)
//         .then((res) => {
//             let question = res;
//             if (answer === 'yes') question.yes++;
//             if (answer === 'no') question.no++;
//             return question.save();
//         })
//         .then((res) => {
//             let question = res;
//             onUpdateComplete(null, question._id);
//         })
//         .catch((err) => {
//             onUpdateComplete(err, null);
//         });
// };

/* jshint ignore: start */
/**
 * async/await version
 * @param {String} id id of question
 * @param {'yes' | 'no'} answer 'yes' or 'no'
 * @param {(err, data) => void} onComplete call this function after updating question
 */
const updateAnswerQuestion = async (id, answer, onComplete) => {
    try {
        let question = await questionSchema.findById(id);
        if (answer === 'yes') question.yes++;
        if (answer === 'no') question.no++;
        await question.save();
        onComplete(null, question._id);
    } catch (err) {
        onComplete(err, null);
    }

}; /* jshint ignore: end */

const getQuestionById = (id, callback) => {
    questionSchema.findById(id, (err, res) => {
        if (err) callback(err);
        callback(null, res);
    });
};

module.exports = {
    addQuestion,
    getRandomQuestion,
    updateAnswerQuestion,
    getQuestionById
};