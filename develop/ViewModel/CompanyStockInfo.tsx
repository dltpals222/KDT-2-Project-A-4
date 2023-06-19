import React, { useState, useEffect } from "react";

interface CompanyData {
  no: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  day: Date;
}
interface companyListData {
  no : number;
  market : string;
  code : number;
  name : string;
  startday : Date;
  realSearch : string;
  flotationNY : string;
}

const CompanyStockInfo: React.FC = () => {
  const [companyData, setCompanyData] = useState<CompanyData[][]>([]);
  const [companyList, setCompanyList] = useState<companyListData[][]>([]);

  useEffect(() => {
    fetch('/api/chart')
      .then(response => response.json())
      .then(result => {
        setCompanyData(result);
        console.log(companyData);
      });
  }, []);



  return (
    <div>
      <h1>시작 가격 : {companyData[0]?.[0]?.open} 원</h1>
      <h2>회사이름 : 삼성전자 </h2>
      <h3>회사 코드 : 005930 </h3>
      <div>전일 종료 가격 : {companyData[0]?.[1]?.close} 원</div>
      <div>최고 가격 : {companyData[0]?.[0]?.high} 원</div>
      <div>최저 가격 : {companyData[0]?.[0]?.low} 원</div>
      <div>거래량 : {companyData[0]?.[0]?.volume}건</div>
    </div>
  );
};

export default CompanyStockInfo;
