import * as React from "react";
import CompanyStockInfo from "../ViewModel/CompanyStockInfo";
import ApexChart from "./apexCharts";


function CompanyPage() : JSX.Element {
  return(
    <div>
      <CompanyStockInfo />
      <br />
      <ApexChart />
    </div>
  )
}

export default CompanyPage;