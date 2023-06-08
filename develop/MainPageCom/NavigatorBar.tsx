import * as React from "react";

function Navi() : JSX.Element {
  return  (
         <nav>
            <button><a href=''>마이페이지</a></button>
            <button><a href=''>검색페이지</a></button>
            <button><a href=''>운 페이지</a></button>
        </nav>
  );
}

export default Navi;