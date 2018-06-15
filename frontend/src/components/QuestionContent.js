import React, { Component } from "react";

class QuestionContent extends Component {
  render() {
    return <h1 className="text-center py-5">{this.props.question.content}</h1>;
  }
}

export default QuestionContent;
