import React, { useState, useRef } from "react";
import Comment from "./comment";

function Feed() {
  // const [comment, setcomment] = useState();
  const [id, setId] = useState(1);
  const [InputState, setInput] = useState("");
  const value = useRef();
  const [commentArray, setcommentArray] = useState([
    {
      id: 0,
      content: "안녕하세요",
    },
  ]);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: InputState,
      createdAt: new Date().toLocaleString(),
    };
    setInput("");
    setcommentArray([...commentArray, newComment]);
  };

  const onKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      addComment();
    }
  };

  return (
    <>
      <div className="content">
        <div className="feed_header">
          <div className="profile_picture"></div>
          <div className="user_id">JeongDongHyeon</div>
        </div>
        <div className="feed_picture"></div>

        <div className="menu_bar">
          <div className="menu_bar_icon">
            <img
              className="img_heart"
              alt=""
              src={require("../../assets/images/img/heart.png")}
              width="30px"
              height="30px"
            />
            <img
              alt=""
              src={require("../../assets/images/img/comment.png")}
              width="50px"
              height="50px"
            />
            <img
              alt=""
              src={require("../../assets/images/img/upload.png")}
              width="30px"
              height="30px"
            />
            <div className="menu_bar_right">
              <img
                alt=""
                src={require("../../assets/images/img/bookmark-white.png")}
                width="30px"
                height="30px"
              />
            </div>
          </div>

          <div className="like_content">
            <div className="like_profile"></div>
            <div className="like_check">JustCode님 외 10명이 좋아합니다.</div>
          </div>

          <div className="main_comment_box">
            <div className="comment-box1">
              {commentArray.map((comment) => {
                return (
                  <li key={comment.id}>
                    <Comment
                      id={comment.id}
                      content={comment.content}
                      writer={"익명"}
                      createdAt={comment.createdAt || "2022-01-01"}
                    />
                  </li>
                );
              })}
            </div>
          </div>

          <div className="function_tab">
            <div className="ago_time">n분 전</div>
            <div className="like_heart_btn">
              <img
                alt=""
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                width="15px"
                height="15px"
              />
            </div>
          </div>

          <div className="comment_append_box">
            <input
              className="comment_content"
              type="text"
              placeholder="댓글 달기..."
              ref={value}
              value={InputState}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
            />

            <button
              className="comment_append"
              type="submit"
              onClick={addComment}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
