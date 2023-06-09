import React, { CSSProperties, useState } from "react";

function LoginPage() : JSX.Element{
    const [id, setId] = useState<string>('');
    const [pwd, setPwd] = useState<string>('');

    const container : CSSProperties = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems: "center",
        height:"80%",
    }

    return(
    <div>
        <div id="logo">운에 맡겨라! 모의투자</div>
        <form>
            <label htmlFor="id">
                <input type="text" id="id" placeholder="ID를 입력하세요" name="id" value={id} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} style={container} />
            </label>
            <label htmlFor='password'>
                <input type="password" id='password' placeholder='password를 입력하세요' name='password' value={pwd} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPwd(e.target.value)} style={container} />
            </label>
            <button type="submit">로그인</button>
        </form>
        <button type="button">회원가입</button>
    </div>
    )
}

export default LoginPage;