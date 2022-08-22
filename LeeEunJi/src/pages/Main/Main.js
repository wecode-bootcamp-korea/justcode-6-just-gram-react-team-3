import React, { useEffect } from "react";
import "./Main.scss";
import Feed from "./Feed";
import { useState } from "react";

function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch("/data/feeds.json")
      .then((res) => res.json())
      .then((data) => {
        setFeeds(data.feeds);
      });
  }, []);

  return (
    <>
      <header>
        <div className="left-meun">
          <img src="/images/main.png" className="main-logo" />
          <img src="/images/line.png" className="main-line" />
          <span className="Jg-logo">Justgram</span>
        </div>
        <div className="center-menu">
          <input type="text" placeholder="검색" className="search-bar" />
        </div>
        <div className="right-menu">
          <img src="/images/explore.png" className="mg-r20" />
          <img src="/images/heart.png" id="heart" className="mg-r20" />
          <img src="/images/profile.png" className="mg-r20" />
        </div>
      </header>
      <main>
        {feeds.map((feed) => {
          return <Feed key={feed.id} feedData={feed} />;
        })}
      </main>
    </>
  );
}

export default Main;
