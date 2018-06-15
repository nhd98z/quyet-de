import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">
          Trang chủ
        </Link>
        <Link to="/ask" className="nav-link">
          Hỏi nhanh
        </Link>
        <Link to="/" className="nav-link">
          Đáp gọn
        </Link>
      </nav>
    );
  }
}

export default NavBar;
