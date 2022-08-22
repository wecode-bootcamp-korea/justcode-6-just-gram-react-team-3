import React from "react";
import "./main.scss";
import Feed from "./feed";

function Main() {
  return (
    <>
      <header>
        <div className="header header_left">
          <img
            alt=""
            src={require("../../assets/images/img/instagram.png")}
            width="20px"
            height="20px"
          />
          <div className="vertical"></div>
          <div className="JustGram_naming">
            <p>JustGram</p>
          </div>
        </div>
        <div className="header header_center">
          <div className="txt_box">
            <input type="text" placeholder="검색" />
            <img
              alt=""
              src={require("../../assets/images/img/search.png")}
              width="12px"
              height="12px"
            />
          </div>
        </div>
        <div className="header header_right">
          <img
            alt=""
            className="menu_icon_image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            alt=""
            className="menu_icon_image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            alt=""
            className="menu_icon_image"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </header>

      <section>
        <div className="main_content">
          <Feed />
          <Feed />
          <Feed />
        </div>
      </section>
    </>
  );
}

export default Main;
