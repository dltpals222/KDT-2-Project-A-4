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

  const divStyle = {
    display : "flex",
    justifyContent : "space-evenly"
  }

  return (
    <div>
      <h1> 삼성전자 <span style={{fontSize : "0.5em"}}>  005930</span> <span style={{fontSize : "1.5em"}}><br />{companyData[0]?.[0]?.open} </span>원</h1>
      {/* <h3> 005930 </h3> */}
      <div style={{width : "390px"}}>
        <div style={divStyle}><div style={{width : "150px"}}>전일 종료 가격</div><div style={{width : "240px"}}>{companyData[0]?.[1]?.close} 원</div>  </div>
        <div style={divStyle}><div style={{width : "150px"}}>최고 가격</div><div style={{width : "240px"}}>{companyData[0]?.[0]?.high} 원</div> </div>
        <div style={divStyle}><div style={{width : "150px"}}>최저 가격</div><div style={{width : "240px"}}>{companyData[0]?.[0]?.low} 원</div>  </div>
        <div style={divStyle}><div style={{width : "150px"}}>거래량</div><div style={{width : "240px"}}>{companyData[0]?.[0]?.volume}건</div>  </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};

export default CompanyStockInfo;
