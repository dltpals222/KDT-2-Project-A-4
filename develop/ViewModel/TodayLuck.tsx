import React, { useState,useEffect } from "react";

interface PropsComponentType {
  luck: string;
  message: string;
}
//메세지를 띄우는 부분 프로퍼티s
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
  //데이터를 잠깐 저장하는 useState 
  const [luckIndex, setLuckIndex] = useState<number>(-1);
  const [luckMessageIndex, setLuckMessageIndex] = useState<number>(-1);
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false)
  
  useEffect(()=>{
    const saveDate = localStorage.getItem("clickedButtonDate");
    const currentDate = new Date().toLocaleDateString();

    //밑에 주석은 버튼을 한번 누르면 버튼이 비활성화 되므로 날짜를 바꿔줘야해서 남겨둠
    // const currentDate = "2023-06-11";

    //버튼을 누를경우 저장된 날짜와 현재 날짜가 같으면 실행
    if(saveDate === currentDate){
      const savedClickButton = localStorage.getItem("isButtonClicked")
      if(savedClickButton === "true"){
        setButtonDisabled(true)
      }
    }else{
      localStorage.setItem("clickedButtonDate",currentDate)
      localStorage.setItem("isButtonClicked","false")
      setButtonDisabled(false)
    }
  },[])
  //luckArr, luckmessageArr 배열에 있는 값을 랜덤으로 돌리는 로직
  const handleRandomLuck = () => {
    if(!isButtonDisabled){
    const randomLuck: number = Math.floor(Math.random() * luckArr.length);
    setLuckIndex(randomLuck);
    setLuckMessageIndex(randomLuck);
    setButtonDisabled(true)
    localStorage.setItem("isButtonClicked","true")
    }
  };
  //처음에 제출 방지하는 로직 
  /* 매개변수event 선언하고 event.preventDefault 사용하면 더 간단함 */
  if(luckIndex === -1 && luckMessageIndex === -1){
    return (
      <div>
        <h1>오늘의 운세</h1>
      <button onClick={handleRandomLuck} disabled={isButtonDisabled}>운세 돌리기</button>
      </div>
    )
  }

  return (
    <div>
      <h1>오늘의 운세</h1>
      <PropsComponent
        luck={luckArr[luckIndex]}
        message={luckmessageArr[luckMessageIndex]}
      />
      <button onClick={handleRandomLuck} disabled={isButtonDisabled}>운세 돌리기</button>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default LuckPage;
