import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";

//검색결과
// interface SearchResult {
//   name: string;
// }

//검색 로직 작성 중
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("name");
  // const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchCategory(event.target.value);
  };

  function searchForm (searchCategory : string, searchTerm : string){

  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // setSearchTerm(searchTerm);
    // setSearchCategory(searchCategory);
  };

  console.log('검색어',searchTerm,setSearchTerm)
  console.log('검색카테괼',searchCategory,setSearchCategory)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleCategoryChange} value={searchCategory}>
          <option value="name">회사명</option>
          <option value="code">회사코드</option>
        </select>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <input type="submit" value="확인" />
      </form>
      <ul></ul>
    </div>
  );
};

export default SearchPage;
