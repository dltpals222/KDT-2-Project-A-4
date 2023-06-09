import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(): JSX.Element {
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const navigate = useNavigate();

  const container: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "80%",
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    // 기본 제출 이벤트 방지
    e.preventDefault();
    const data = { id, pwd };
    console.log(data);
    // const form = event.target;
    // const formData = new FormData(form);
    // console.log(formData);
    fetch("/login", {
      // HTTP 요청 메서드 지정
      method: "POST",
      // HTTP 요청 헤더 지정
      // 요청 본문에 클라이언트가 서버에 JSON 형태의 데이터를 담아 보낼 것을 명시
      headers: { "Content-Type": "application/json" },
      // HTTP 요청 본문에 담을 데이터를 지정
      // id, pwd를 JSON 형태의 문자열로 변환하여 본문에 보냄
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log("로그인 성공", result);
          alert("로그인 성공하셨습니다.");
          navigate("/main");
        } else {
          // 로그인 실패시 사유를 alert으로 출력.(내용은 reason에 담겨짐.)
          console.log("로그인 실패");
          alert(result.reason);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // 에러 처리 로직 추가
      });
  }

  return (
    <div style={container}>
      <div id="logo">운에 맡겨라! 모의투자</div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="id">
          <input
            type="text"
            id="id"
            placeholder="ID를 입력하세요"
            name="id"
            value={id}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="password를 입력하세요"
            name="password"
            value={pwd}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPwd(e.target.value)
            }
          />
        </label>
        <button type="submit">로그인</button>
      </form>
      <button type="button" onClick={() => {navigate("/signup")}}>회원가입</button>
    </div>
  );
}

export default LoginPage;
