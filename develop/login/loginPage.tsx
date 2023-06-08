import React, { useState } from "react";

function LoginPage() : JSX.Element{
    const [id, setId] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');

    return(
    <div>
        <div id="logo">운에 맡겨라! 모의투자</div>
        <form>
            <label htmlFor="id">
                <input type="text" id="id" placeholder="ID를 입력하세요" name="id" value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} />
            </label>
            <label htmlFor='password'>
                <input type="password" id='password' placeholder='password를 입력하세요' name='password' value={pwd} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)} />
            </label>
            <button type="submit">로그인</button>
        </form>
        <button type="button">회원가입</button>
    </div>
    )
}

export default LoginPage;