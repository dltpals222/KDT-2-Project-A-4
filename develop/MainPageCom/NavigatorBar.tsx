import * as React from "react";
import { Link } from "react-router-dom"



function Navi() : JSX.Element {
  return  (
         <nav>
            <Link to="/mypage">
            <button>마이페이지</button>
            </Link>
            <Link to="/search">
            <button>검색페이지</button>
            </Link>
            <Link to="/luckpage">
            <button>운 페이지</button>
            </Link>
        </nav>
  );
}
