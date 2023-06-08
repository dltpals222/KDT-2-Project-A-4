import React, { useState } from "react";

function LoginPage(){
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    return(
    <div>
        <label htmlFor="id">
            <input type="text" id="id" placeholder="ID를 입력하세요" name="id" value={} onChange={} />

        </label>
    </div>
    )
}