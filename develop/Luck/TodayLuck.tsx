import React, { useState } from "react";

interface PropsComponentType {
  luck: string;
  message: string;
}

const PropsComponent: React.FC<PropsComponentType> = ({ luck, message }) => {
  return (
    <div>
      <div>오늘의 운세: {luck}</div>
      <div>오늘의 당신의 운은 "{luck}" 입니다. </div>
      <div>{message}</div>
    </div>
  );
};

function LuckPage() {
  const luckArr: string[] = [
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
  const luckmessageArr: string[] = [
    "뭘해도 잘되는 날이 될 것입니다.",
    "당신은 길가다가도 돈을 줍게 되는 운입니다.",
    "행운이 가득한 날이 될 것입니다.",
    "너구리라면을 먹다가 다시마 2개가 있는 정도의 행운입니다.",
    " 평소와 똑같은 날이 될거 같습니다.",
    "당신은 에러가 가득한 날이 될것입니다.",
    "당신은 걷다가 새똥맞을 운세입니다.",
    "당신의 차에 펑크가 나고 컴퓨터 그래픽카드가 고장날 운세이니 체념 하십시오.",
    "길가다가도 머리가 빠질 운세이니 없는 듯이 사십시오.",
  ];

  const [luckIndex, setLuckIndex] = useState<number>(-1);
  const [luckMessageIndex, setLuckMessageIndex] = useState<number>(-1);

  const handleRandomLuck = () => {
    const randomLuck: number = Math.floor(Math.random() * luckArr.length);
    setLuckIndex(randomLuck);
    setLuckMessageIndex(randomLuck);
  };
  if(luckIndex === -1 && luckMessageIndex === -1){
    return (
      <div>
        <button onClick={handleRandomLuck}>운세 돌리기</button>
      </div>
    )
  }

  return (
    <div>
      <PropsComponent
        luck={luckArr[luckIndex]}
        message={luckmessageArr[luckMessageIndex]}
      />
      <button onClick={handleRandomLuck}>운세 돌리기</button>
    </div>
  );
}
export default LuckPage;