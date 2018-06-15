import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    const total = this.props.question.yes + this.props.question.no;
    const yes =
      total !== 0 ? (this.props.question.yes * 100 / total).toFixed(3) : 50;
    const no = 100 - yes;
    const styleYes = {
      flex: yes / 100
    };
    const styleNo = {
      flex: no / 100
    };
    return (
      <div className="progress" style={{ height: 25 }}>
        <div className="progress-bar" style={styleYes}>
          {yes}%
        </div>
        <div className="progress-bar bg-danger" style={styleNo}>
          {no}%
        </div>
      </div>
    );
  }
}

export default ProgressBar;
