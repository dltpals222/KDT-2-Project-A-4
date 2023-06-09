import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const navigate = useNavigate();



  return (
    <div>
      <div id="logo">회원가입</div>
      <form method="POST" onSubmit={}>
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
        <button type="submit">로그인</button>
      </form>
      <button type="button">회원가입</button>
    </div>
  );
}

export default SignUpPage;