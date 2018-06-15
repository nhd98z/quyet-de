import React, { Component } from "react";
import QuestionContent from "../components/QuestionContent";
import YesNo from "../components/YesNo";
import AnotherChoice from "../components/AnotherChoice";

class QuestionWithYesNo extends Component {
  render() {
    return (
      <div>
        <QuestionContent question={this.props.question} />
        <YesNo
          question={this.props.question}
          handleYesNo={this.props.handleYesNo}
          seeResult={this.props.seeResult}
        />
        <AnotherChoice
          question={this.props.question}
        />
      </div>
    );
  }
}

export default QuestionWithYesNo;
