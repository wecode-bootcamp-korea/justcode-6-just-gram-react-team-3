import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { render } from "@testing-library/react";

function Login() {
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [token, setToken] = useState("");

  const handleIdInput = (e) => {
    const idValue = e.target.value;
    setId(idValue);
    idValue.includes("@") && password.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handlepwinput = (e) => {
    const pwValue = e.target.value;
    setPassword(pwValue);
    id.includes("@") && pwValue.length >= 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  const onLoginButtonClcik = () => {
    const body = {
      email: id,
      password: password,
    };
    fetch("http://auth.jaejun.me:10010", {
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        setToken(json.access_token);
        localStorage.setItem("token", json.access_token);
      });
  };

  return (
    <div className="login">
      <div className="fonts">Justgram</div>
      <div className="form">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="form-design"
          id="input-id"
          onChange={handleIdInput}
        />
      </div>
      <div className="form">
        <input
          type="password"
          placeholder="비밀번호"
          className="form-design"
          id="input-pw"
          onChange={handlepwinput}
        />
      </div>
      <button
        id="login"
        style={{
          backgroundColor: isValid ? "rgb(11, 88, 160)" : "rgb(190, 220, 248)",
        }}
        onClick={onLoginButtonClcik}
      >
        <Link to="/Main" style={{ textDecoration: "none", color: "white" }}>
          로그인
        </Link>
      </button>
      <button id="password" disabled>
        비밀번호를 잊으셨나요?
      </button>
    </div>
  );
}

export default Login;

// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Justgram</title>
//     <link rel="stylesheet" href="./style/login.css" />
//     <link rel="shortcut icon" href="./img/instagram.png" type="image/x-icon" />

//   </head>
//   <body>
//     <div className="login">
//         <div className="fonts">Justgram</div>
//         <div className="form">
//           <input
//             type="text"
//             placeholder="전화번호, 사용자 이름 또는 이메일"
//             className="form-design"
//             id="input-id"
//           />
//         </div>
//         <div className="form">
//           <input type="password" placeholder="비밀번호" className="form-design" id="input-pw" />
//         </div>
//         <button id="login" disabled>로그인</button>
//         <button id="password" disabled>비밀번호를 잊으셨나요?</button>
//       </div>
//     </div>
//     <script src="./js/login.js"></script>
//   </body>
// </html>
