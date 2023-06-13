import React, { useState, ChangeEvent, FormEvent } from "react";

 //데이터를 잠깐 저장하는 useState 
function DrawEvent() {
  const [inputs, setInputs] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);

  //input을 생성 하기 위한 로직
  const handleCreate = (): void => {
    setInputs([...inputs, ""]);
  };
  //사용자가 입력한 값을 모두 inputs에 저장
  const handleInputEventChange = (index: number, event: ChangeEvent<HTMLInputElement>): void => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
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
  const handleConfirm = (event: FormEvent): void => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    setOutputs(inputs);
  };
  //사용자 입력 값을 랜덤으로 하나 뽑기 위한 로직 (미완성)
  const handleRandomStocks  = ()=> {
    const randomStocksIndex : number = Math.floor(Math.random() * outputs.length);
    const randomStocks = outputs[randomStocksIndex]
    return [randomStocks];
  };
  interface stocksType{
    stock : string[]
  }
  //랜덤으로 뽑은 입력값을 출력하기위한 프로퍼티
  const PropsComponent: React.FC<stocksType> = ({ stock }) => {
    return (
      <div>
        <div>{`${stock}`.length > 0 &&`${inputs.length}개의 종목 중 하나인 ${stock} 당첨!!!`}</div>
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
      <button type="button" onClick={handleCreate}>
        종목 생성
      </button>
      <button type="button" onClick={handleDelete}>
        종목 삭제
      </button>
        <button type="submit">종목 뽑기</button>
      </form>
      <div>
      {outputs.map((output, index) => (
        <div key={index}>입력한 주식 종목: {output}</div>
      ))}
        <PropsComponent stock={handleRandomStocks()} />
        {/* <button type="submit">확인</button> */}

      </div>
    </div>
  );
}

export default DrawEvent;
