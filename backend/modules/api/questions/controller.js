const questionModel = require("./model");

const createQuestion = content =>
  new Promise((resolve, reject) => {
    questionModel
      .create({
        content
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const increaseYes = questionId =>
  new Promise((resolve, reject) => {
    questionModel
      .update(
        {
          _id: questionId
        },
        {
          $inc: { yes: 1 }
        }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const increaseNo = questionId =>
  new Promise((resolve, reject) => {
    questionModel
      .update(
        {
          _id: questionId
        },
        {
          $inc: { no: 1 }
        }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getQuestion = questionId =>
  new Promise((resolve, reject) => {
    questionModel
      .findById(questionId)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getAllQuestions = () =>
  new Promise((resolve, reject) => {
    questionModel
      .find()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createQuestion,
  increaseYes,
  increaseNo,
  getQuestion,
  getAllQuestions
};
