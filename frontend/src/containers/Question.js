import React, { Component } from "react";
import axios from "../axios";
import QuestionWithYesNo from "../components/QuestionWithYesNo";

class Question extends Component {
  state = {
    question: undefined,
    initializing: true
  };

  _handleYesNo = (questionId, yesNoString) => {
    axios
      .put(`/api/questions/${questionId}/${yesNoString}`)
      .then(data => {
        const newQuestion = this.state.question;
        yesNoString === "yes" ? newQuestion.yes++ : newQuestion.no++;
        this.setState({ question: newQuestion });
      })
      .catch(err => console.error(err));
  };

  _seeResult = () => {
    this.setState(prevState => ({
      initializing: false
    }));
  };

  componentDidMount() {
    this.props.match.params.questionId !== undefined
      ? axios
          .get(`/api/questions/${this.props.match.params.questionId}`)
          .then(data =>
            this.setState({
              question: data.data === "" ? undefined : data.data
            })
          )
          .catch(err => console.error(err))
      : axios
          .get("/api/questions")
          .then(data =>
            this.setState({
              question:
                data.data === []
                  ? undefined
                  : data.data[Math.floor(Math.random() * data.data.length)]
            })
          )
          .catch(err => console.log(err));
  }

  render() {
    const questionDisplay =
      this.state.question !== undefined ? (
        this.state.initializing ? (
          <QuestionWithYesNo
            question={this.state.question}
            handleYesNo={this._handleYesNo}
            seeResult={this._seeResult}
          />
        ) : (
          <div>hey</div>
        )
      ) : (
        <h1 className="text-center py-5">There is no question in database</h1>
      );
    return <div className="container">{questionDisplay}</div>;
    // return <div>abc</div>;
  }
}

export default Question;
