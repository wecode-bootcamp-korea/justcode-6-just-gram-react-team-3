import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.scss";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="left-wrapper">
        <Link to="/login">
          <span className="logo-text">Justgram</span>
        </Link>
      </div>
      <div className="center-wrapper">
        <div className="search-box">
          <img
            className="search-icon"
            src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/search-512.png"
          />
          <input className="search-input" type="text" placeholder="검색" />
        </div>
      </div>
      <div className="right-wrapper">
        <div className="icon-box">
          <img
            alt="expore-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            alt="heart-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            alt="my-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
