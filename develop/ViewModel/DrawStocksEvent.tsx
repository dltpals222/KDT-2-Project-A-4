import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

 //데이터를 잠깐 저장하는 useState 
function DrawEvent() {
  const [inputs, setInputs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [error, setError] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

//클릭시 5번의 횟수 제한 + 버튼 잠금 만들어야함 
  useEffect(()=>{
    const sessionUserID = sessionStorage.getItem("sessionId")
    const storageKey = `clickedButtonDate_${sessionUserID}`
    const saveDate = sessionStorage.getItem(storageKey);
    const currentDate = new Date().toLocaleDateString();

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
  // setCount(count => count+1)
  
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
    if (inputs.length === 0) {
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
    }else{
      setError("");
      event.preventDefault();
      setShowMessage(true)
    }
  };
  //랜덤으로 뽑은 입력값을 출력하기위한 프로퍼티
  const PropsComponent: React.FC<stocksType> = ({ stock }) => {
    return (
      <div>
        <div>{`${stock}`.length > 0 &&`${inputs.length}개의 종목 중 하나인 ${stock} 당첨!!!`}</div>
      </div>
    );
  };
  //사용자 입력 값을 랜덤으로 하나 뽑기 위한 로직 (미완성)
  const handleRandomStocks  = ()=> {
    const randomStocksIndex : number = Math.floor(Math.random() * outputs.length);
    const randomStocks = outputs[randomStocksIndex]
    localStorage.setItem("DrawStocksButtonClicked","true")
    return [randomStocks];
  };


  interface stocksType{
    stock : string[]
  }
  
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
      <button type="button" onClick={handleCreate}>
        종목 생성
      </button>
      <button type="button" onClick={handleDelete}>
        종목 삭제
      </button>
        <button type="submit" disabled={buttonDisabled} >종목 뽑기</button>
      </form>
      <div>
      {outputs.map((output, index) => (
        <div key={index}>입력한 주식 종목: {output}</div>
      ))}
        {showMessage&& <PropsComponent stock={handleRandomStocks()} />}
        {error && <h1 style={{color : "red"}}>{error}</h1>}

      </div>
    </div>
  );
}

export default DrawEvent;
