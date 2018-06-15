import React, { Component } from "react";

class YesNo extends Component {
  _onClick = yesNoString => {
    this.props.handleYesNo(this.props.question._id, yesNoString);
    this.props.seeResult();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 text-center">
          <input
            type="button"
            className="btn btn-primary"
            value="Đúng / Có / Phải"
            onClick={this._onClick("yes")}
          />
        </div>
        <div className="col-md-6 text-center">
          <input
            type="button"
            className="btn btn-danger"
            value="Sai / Không / Phải"
            onClick={this._onClick("no")}
          />
        </div>
      </div>
    );
  }
}

export default YesNo;
