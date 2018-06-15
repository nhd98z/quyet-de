const express = require("express");

const questionController = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  questionController
    .getAllQuestions()
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/:questionId", (req, res) => {
  questionController
    .getQuestion(req.params.questionId)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => {
  questionController
    .createQuestion(req.body.content)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.put("/:questionId/yes", (req, res) => {
  questionController
    .increaseYes(req.params.questionId)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.put("/:questionId/no", (req, res) => {
  questionController
    .increaseNo(req.params.questionId)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;