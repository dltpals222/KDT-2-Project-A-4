import { response } from "express";
import * as React from "react";
import { useState, ChangeEvent, FormEvent, SetStateAction } from "react";

//검색결과
interface SearchResult {
  name : string;
  code : string;
}

//검색 로직 작성 중
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string|number>("");
  const [searchCategory, setSearchCategory] = useState<string>("name");
  const [searchResult, setSearchResult] = useState<[]>([])
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchCategory(event.target.value);
  };

  
  const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    setIsSubmitted(true)
  }

  React.useEffect(() => {
    if(isSubmitted){
      fetch(`/api/main/search?searchCategory=${searchCategory}&searchTerm=${searchTerm}`)
      .then(response => response.json())
      .then(data => setSearchResult(data))
      .catch(error => console.error("Fetch 요청 에러",error))
      setIsSubmitted(false)
    }},[isSubmitted]);
    




  return (
    <div>
      <form onSubmit={handleSubmit} method="GET">
        <select onChange={handleCategoryChange} value={searchCategory}>
          <option value="name">회사명</option>
          <option value="code">회사코드</option>
        </select>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <input type="submit" value="확인" />
      </form>
      <ul>
        {searchResult.map(((element : SearchResult) => (
          (<li key={element.code}>
            <div>회사명 : {element.name}</div>
            <div>회사코드 : {element.code}</div>
          </li>)
        )))}
      </ul>
    </div>
  );
};

export default SearchPage;
