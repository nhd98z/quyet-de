import React, { Component } from "react";
import axios from '../axios';

class Ask extends Component {
  state = {
    questionContent: ""
  };

  _handleChange = content => {
    this.setState({ questionContent: content }, () => {
      console.log(this.state.questionContent);
    });
  }

  _handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/questions", {content: this.state.questionContent})
      .then(data => {
        console.log(data.data);
        this.props.history.push(`/question/${data.data._id}`)})
      .catch(err => console.error(err));
    this.props.history.push()
  }

  render() {    
    return (
      <div>
        <h1>Hãy hỏi cộng đồng một câu hỏi đúng/sai hoặc có/không</h1>
        <form onSubmit={this._handleSubmit}>
          <textarea
            className="form-control"
            maxLength={200}
            rows="10"
            onChange={event => this._handleChange(event.target.value)}
          />
          <h4>Còn {200-this.state.questionContent.length}/200 kí tự</h4>
          <input type="submit" value="Gửi" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Ask;
