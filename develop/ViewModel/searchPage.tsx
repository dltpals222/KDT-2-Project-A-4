import * as React from "react";
import { useState, ChangeEvent, FormEvent, SetStateAction } from "react";

//검색결과
interface SearchResult {
  name : string;
  code : string;
}

//검색 로직 작성 중
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string|number>(""); // 검색어
  const [searchCategory, setSearchCategory] = useState<string>("name"); // 검색카테고리
  const [searchResult, setSearchResult] = useState<[]>([]); //appServer에서 받아온 정보를 담음
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); //검색버튼 누를 시 변화 감지를 위한 값

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSearchCategory(event.target.value);
  };

  //버튼누를 시 감지
  const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    setIsSubmitted(true)
  }
  //버튼 누른 후 appServer에서 처리된 DB데이터를 받아옴
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
