import React, { Component } from "react";

class AnotherChoice extends Component {
  render() {
    return (
      <div className="text-center py-4">
        <form>
          <input
            type="submit"
            className="btn btn-warning mx-2"
            value="Câu hỏi khác"
          />
        </form>
        <form>
          <input
            type="submit"
            className="btn btn-warning mx-2"
            value="Xem kết quả"
          />
        </form>
      </div>
    );
  }
}

export default AnotherChoice;
