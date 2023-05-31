import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/login", { userId, password });

      // 토큰을 저장하거나 다른 작업을 수행할 수 있습니다.
      console.log("로그인 성공");
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">Id:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={handleIdChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
