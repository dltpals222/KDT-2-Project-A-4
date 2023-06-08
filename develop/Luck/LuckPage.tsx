import React, { useState } from "react";

const propsComponent = ({ luck, message }) => {
  return (
    <div>
      <div>오늘의 운세: {luck}</div>
      <div>{message}</div>
    </div>
  );
};

const luckMessage = () => {
  const luckArr = [
    "대길",
    "중길",
    "길",
    "소길",
    "평",
    "소흉",
    "흉",
    "중흉",
    "대흉",
  ];
  const luckmessage = [
    "오늘의 당신의 운은 대길 입니다. 뭘해도 잘되는 날이 될 것입니다. ",
    "오늘의 당신의 운은 중길 입니다. 당신은 길가다가도 돈을 줍게 되는 운입니다.",
    "오늘의 당신의 운은 길 입니다. 행운이 가득한 날이 될 것입니다.",
    "오늘의 당신의 운은 소길 입니다. ",
    "오늘의 당신의 운은 평 입니다. 평소와 똑같은 날이 될거 같습니다.",
    "오늘의 당신의 운은 소흉 입니다. 당신은 걷다가 껌 밟을 운세입니다.",
    "오늘의 당신의 운은 흉 입니다.",
    "오늘의 당신의 운은 중흉 입니다.",
    "오늘의 당신의 운은 대흉 입니다. 길가다가도 머리가 빠질 운세이니 없는 듯이 사십시오.",
  ];
};

function luckPage(): JSX.Element {
  return (
    <div>
      <propsComponent />
    </div>
  );
}
export default luckPage;
