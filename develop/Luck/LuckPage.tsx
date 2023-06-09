import * as React from "react";
import TodayLuck from "./TodayLuck"
import DrawStocksEvent from "./DrawStocksEvent"


function LuckPage() : JSX.Element {
  return(
    <div>
      <TodayLuck />
      <DrawStocksEvent />
    </div>
  )
}

export default LuckPage;