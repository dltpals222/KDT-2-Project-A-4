import * as React from "react";
import { Link } from "react-router-dom";

function Test() : JSX.Element {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>테스트용 페이지입니다. 아래 숫자가 보이시나요?</p>
            <p>2023-06-07</p>
            <Link to="/luckpage">운세 테스트</Link>
        </div>
    )
}
export default Test;