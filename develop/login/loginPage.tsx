import React, { useState } from "react";

function LoginPage(){
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    return(
    <div>
        <div id="logo">운에 맡겨라! 모의투자</div>
        <form>
            <label htmlFor="id">
                <input type="text" id="id" placeholder="ID를 입력하세요" name="id" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <label htmlFor='password'>
                <input type="password" id='password' placeholder='password를 입력하세요' name='password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
            </label>
        </form>
    </div>
    )
}