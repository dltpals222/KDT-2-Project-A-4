import * as React from "react";

const inputTextStyle: {} = {
  width: "80%",
  height: "5%",
};

const inputSubmitStyle: {} = {
  borderRadius: "5%",
  width: "30%",
};

function login() {
  return (
    <div>
      <header></header>
      <main>
        <div>
          <div>주식 추천 앱</div>
          <div>운운운운운운</div>
        </div>
        <form action="/main" method="POST">
          <input style={inputTextStyle} type="text" placeholder="아이디"></input>
          <input style={inputTextStyle} type="text" placeholder="패스워드"></input>
          <input style={inputSubmitStyle} type="submit" value="로그인"></input>
        </form>
        <form action="/signUp" method="GET">
          <input style={inputSubmitStyle} type="submit" value="회원가입" />
        </form>
      </main>
    </div>
  );
}

export default login;
