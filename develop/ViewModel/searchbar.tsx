import * as React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="search-result" method="GET">
        <select name="sb" id="search-bar">
          <option value="name">회사명</option>
          <option value="code">회사코드</option>
        </select>
        <input type="text" />
        <input type="submit" value="확인" />
      </form>
    </div>
  );
};

export default SearchBar;
