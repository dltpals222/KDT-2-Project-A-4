import * as React from "react";
import TodayLuck from "../ViewModel/TodayLuck"
import DrawStocksEvent from "../ViewModel/DrawStocksEvent"


function LuckPage() : JSX.Element {
  return(
    <div>
      <TodayLuck />
      <DrawStocksEvent />
    </div>
  )
}

export default LuckPage;