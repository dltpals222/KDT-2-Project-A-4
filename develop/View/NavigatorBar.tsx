import * as React from "react";
import { Link } from "react-router-dom"



function Navi() : JSX.Element {
  const navStyle = {
    height : "48px", 
    width: "390px",
    marginBottom : "5px",
    display : "flex",
    justifyContent : "space-evenly",
    alignItems : "center"
  }

  return  (
         <nav style={navStyle}>
            <Link to="">
            <button type="button">메인페이지</button>
            </Link>
            <Link to="search">
            <button type="button">검색페이지</button>
            </Link>
            <Link to="companypage">
            <button type="button">회사 상세 페이지</button>
            </Link>
            <Link to="luckpage">
            <button type="button">운 페이지</button>
            </Link>
        </nav>
  );
}

export default Navi;