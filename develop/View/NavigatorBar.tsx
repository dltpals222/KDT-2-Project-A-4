import * as React from "react";
import { Link } from "react-router-dom"



function Navi() : JSX.Element {
  return  (
         <nav>
            <Link to="mypage">
            <button type="button">마이페이지</button>
            </Link>
            <Link to="search">
            <button type="button">검색페이지</button>
            </Link>
            <Link to="luckpage">
            <button type="button">운 페이지</button>
            </Link>
            <Link to="companypage">
            <button type="button">회사 상세 페이지</button>
            </Link>
        </nav>
  );
}

export default Navi;