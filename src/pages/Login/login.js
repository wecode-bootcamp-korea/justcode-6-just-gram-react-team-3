import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  const [id, setId] = useState();
  const [password, setPassWord] = useState();
  const [isValid, setisValid] = useState(false);
  // const [token, setToken] = useState("");

  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.includes("@") && password.length >= 5
      ? setisValid(true)
      : setisValid(false);
  };

  const handlepasswordInput = (e) => {
    const passwordValue = e.target.value;
    setPassWord(passwordValue);
    id.includes("@") && passwordValue.length >= 5
      ? setisValid(true)
      : setisValid(false);
  };

  // const onLoginBtnClick = () => {
  //   const body = {
  //     email: id,
  //     password: password,
  //   };
  //   fetch("http://auth.jaejun.me:10010/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setToken(json.access_token);
  //       localStorage.setItem("token", json.access_token);
  //     });
  // };

  return (
    <>
      <div className="container">
        <div className="logo">
          <p>JustGram</p>
        </div>

        <div className="section_wraper">
          <div className="loginbox">
            <input
              className="section_input"
              type="text"
              placeholder="  전화번호,사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
          </div>

          <div className="loginbox">
            <input
              className="section_input"
              type="password"
              placeholder="  비밀번호"
              onChange={handlepasswordInput}
            />
          </div>

          <p>
            <button
              onClick={goToMain}
              className="loginbtn"
              style={{ backgroundColor: isValid ? "#2880EA" : "#c4e1fb" }}
            >
              로그인
            </button>
          </p>
        </div>

        <hr className="HRline" />

        <div>
          <img alt="" src="img/ico/facebook.ico" />
          <a className="facebookLogin" href="https://www.facebook.com/">
            Facebook으로 로그인
          </a>
        </div>

        <footer>
          <a
            className="instaFindPass"
            href="https://www.instagram.com/accounts/password/reset/"
          >
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </div>
    </>
  );
}

export default Login;
