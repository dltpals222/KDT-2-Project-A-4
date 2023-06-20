import React, { CSSProperties } from "react";

function MyPage() : JSX.Element {

    const container: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "80%",
    };
    const noDots: CSSProperties = {
        listStyleType: "none",
        padding: 0,
        margin: 0
    }

    return (
        <div style={container}>
            <div>
                <h3>오늘의 운세</h3>
                <p>결과 값을 넣을 것.</p>
            </div>
            <div>
                <h3>통장 정보</h3>
                <ul>
                    <li style={noDots}></li>
                </ul>
            </div>
            <div>
                <h3>거래 내역</h3>
                <ul>
                    <li id="tradeRecordField" style={noDots}></li>
                </ul>
            </div>
            <div>
                <h3>보유 주식</h3>
                <ul>
                    <li id="stockListField" style={noDots}></li>
                </ul>
            </div>
            <div>
                <h3>운 테스트 기록</h3>
                <ul>
                    <li id="luckTestField" style={noDots}></li>
                </ul>
            </div>
        </div>
    )
}

export default MyPage;