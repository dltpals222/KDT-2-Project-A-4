import React, {useState,ChangeEvent,FormEvent} from "react";

function DrawEvent() {
  const [inputs, setInputs] = useState<JSX.Element[]>([]);
  const [outputs, setOutputs] = useState<string[]>([]);

  const handleCreate = (): void => {
    const newInput :JSX.Element = <input key={inputs.length} title="drawStocks" placeholder="주식 종목을 쓰세요" />;
    setInputs([...inputs, newInput]);
  }
  const handleInputEventChange= (index: number, event: ChangeEvent<HTMLInputElement>):void => {
    const newInputs = [...inputs];
    newInputs[index] = (
      <input
        key={index}
        title="drawStocks"
        placeholder="주식 종목을 쓰세요"
        value={event.target.value}
        onChange={(e) => handleInputEventChange(index, e)}
      />
    );
    setInputs(newInputs);
  };

  const handleDelete = () : void => {
    if(inputs.length === 0) {return;}
    const updatedInputs :JSX.Element[] = [...inputs]
    updatedInputs.pop();
    setInputs(updatedInputs);
  }
  const handleConfirm = (event: FormEvent) : void => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    const inputsValues:string[] = inputs.map((input) => {
      const inputsValue = (input.props as any).value;
      return inputsValue || ""
    })
    setOutputs(inputsValues);

  }

  return(
    <div>
      <h1>주식 종목 뽑기</h1>
      <form onSubmit={handleConfirm}>
        {inputs.map((input, num) => (
          <div key={num}>{input}
{/*             {<button onClick={(event: ChangeEvent<HTMLInputElement>) => handleInputEventChange(num, event)}>}
              입력값 적용
            </button> */}
          </div>
          ))}
          <button type="submit">확인</button>
      </form>
          <button type="button" onClick={handleCreate}>종목 생성</button>
          <button type="button" onClick={handleDelete}>종목 삭제</button>
          <div>{inputs.length}개의 종목중 하나인 {outputs.join(",")} 당첨!!! </div>
        {outputs.map((output, index)=> (
          <div key={index}>{output}</div>
        ))}
    </div>
  )
}

export default DrawEvent;