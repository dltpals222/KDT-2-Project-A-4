import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

 //데이터를 잠깐 저장하는 useState 
function DrawEvent() {
  const [inputs, setInputs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [error, setError] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

  useEffect(()=>{
    //기본 input을 주어지게 하기 위해 input을 하나 생성
    setInputs([...inputs, ""]);
    const sessionUserIdDraw = sessionStorage.getItem("sessionId")
    const storageKey = `drawClickedButtonDate_${sessionUserIdDraw}`
    const saveDate = sessionStorage.getItem(storageKey);
    const currentDate = new Date().toLocaleDateString();
    //테스트 하기 위한 날짜 직접지정
    // const currentDate = "2023-06-11";
    
    //날짜가 동일할시 버튼 disabled
    if(saveDate === currentDate){
      const savedClickButton = localStorage.getItem("DrawStocksButtonClicked")
      if(savedClickButton === "true"){
        setButtonDisabled(true)
      }
      
    }else{
      sessionStorage.setItem(storageKey,currentDate)
      localStorage.setItem("DrawStocksButtonClicked","false")
      setButtonDisabled(false)
    }
  },[])


  
  //input을 생성 하기 위한 로직
  const handleCreate = (): void => {
    setInputs([...inputs, ""]);
  };
  //사용자가 입력한 값을 모두 inputs에 저장
  const handleInputEventChange = (index: number, event: ChangeEvent<HTMLInputElement>): void => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    setShowMessage(false);
  };
  //input을 삭제 하기 위한 로직 
  const handleDelete = (): void => {
    //기본값 input하나를 삭제시키지 않게 하기 위해 inputs.length 를 1값을 줌
    if (inputs.length === 1) {
      return;
    }
    const updatedInputs: string[] = [...inputs];
    //마지막 배열값 제거 
    updatedInputs.pop();
    setInputs(updatedInputs);
  };
  //사용자 입력값을 setOutputs에 데이터 저장
  const handleConfirm = (event:  FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    setOutputs(inputs);
    if(inputs.some(value=>value.trim()==="")){
      setError("주식종목을 빈칸 없이 모두 입력해주세요.");
    }
    else{
      setError("");
      event.preventDefault();
      setShowMessage(true)
      //메세지가 출력함과 동시에 카운트 1을 세어줌 
      //추후 카운트가 5가되면 버튼이 disabled가 됨
      setCount(count => count+1)
    }
  };
  //사용자 입력 값을 랜덤으로 하나 뽑기 위한 로직
  const handleRandomStocks  = ()=> {
    const randomStocksIndex : number = Math.floor(Math.random() * outputs.length);
    const randomStocks = outputs[randomStocksIndex]
    return [randomStocks];
  };
  //count가 >= 면 버튼 비활성화 
  useEffect(() => {
    if(count >= 5 ){
      setButtonDisabled(true)
      localStorage.setItem("DrawStocksButtonClicked","true")
    }
  },[count])

  interface stocksType{
    stock : string[]
  }
  //랜덤으로 뽑은 입력값을 출력하기위한 프로퍼티
  const PropsComponent: React.FC<stocksType> = ({ stock }) => {
    return (
      <div>
        {stock.length > 0 ? <div>{inputs.length}개의 종목 중 하나인 <span style={{fontSize : "2em", fontWeight : 800}}> {stock} </span>당첨!!!</div> : <div />}
        {/* <div>{`${stock}`.length > 0 &&`${inputs.length}개의 종목 중 하나인 ${stock} 당첨!!!`}</div> */}
      </div>
    );
  };


  return (
    <div>
      <h1>주식 종목 뽑기</h1>
      <div>종목생성을 누르고 뽑을 주식 종목을 써주세요.</div>
      <br/>
      <form onSubmit={handleConfirm}>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              title="drawStocks"
              placeholder="주식 종목을 쓰세요"
              value={input}
              onChange={(event) => handleInputEventChange(index, event)}
            />
          </div>
        ))}
        <br />
      <button type="button" onClick={handleCreate}>
        종목 생성
      </button>
      <button type="button" onClick={handleDelete}>
        종목 삭제
      </button>
        <button type="submit" disabled={buttonDisabled} >종목 뽑기</button>
      </form>
      <br />
      <div>
      {outputs.map((output, index) => (
        <div key={index}>입력한 주식 종목: {output}</div>
      ))}
      <br />
      <br />
        {showMessage&& <PropsComponent stock={handleRandomStocks()} />}
        {error && <h1 style={{color : "red"}}>{error}</h1>}

      </div>
    </div>
  );
}

export default DrawEvent;
