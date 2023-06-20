import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const navigate = useNavigate();

  const container: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const signUpBox: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop : "16px",
  }
  const logo: CSSProperties = {
    marginTop : "30px",
    marginBottom : "30px"
  }
  const signUpButton : CSSProperties ={
    marginTop : "16px",
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const data = { id, pwd, pwdConfirm };
    if(pwd !== pwdConfirm){
        alert("비밀번호가 일치하지 않습니다.");
    } else if(pwd.length < 6) {
        alert("비밀번호는 최소 6자리 이상이어야 합니다.")
    } else { 
        fetch("/signup", {
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
                console.log("회원가입 성공", result);
                alert("회원가입에 성공하셨습니다.");
                navigate("/");
              } else {
                // 로그인 실패시 사유를 alert으로 출력.(내용은 reason에 담겨짐.)
                console.log("회원가입 실패");
                alert(result.reason);
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              // 에러 처리 로직 추가
            });
    }
    
  }

  return (
    <div style={container}>
      <div id="logo" style={logo}>회원가입</div>
      <form method="POST" onSubmit={handleSubmit} style={signUpBox}>
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
        <label htmlFor="password_confirm">
          <input
            type="password_confirm"
            id="password_confirm"
            placeholder="password를 다시 입력하세요"
            name="password_confirm"
            value={pwdConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPwdConfirm(e.target.value)
            }
          />
        </label>
        <button type="submit" style={signUpButton}>회원가입</button>
      </form>
    </div>
  );
}

export default SignUpPage;