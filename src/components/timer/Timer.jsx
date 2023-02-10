import { useTimer } from "../hooks/useTimer";
import styled from "styled-components";

const Timer = () => {
  const {
    startHandler,
    stopHandler,
    resetHandler,
    iscount,
    input,
    changeInputHandler,
    addHandler,
    time,
  } = useTimer();
  return (
    <Div>
      <input
        type="number"
        value={input}
        onChange={(e) => changeInputHandler(e.target.value)}
      />
      <Button1 onClick={addHandler}>Add</Button1>

      <h1>{time || "00"}</h1>

      {iscount ? (
        <Button2 onClick={stopHandler}>Stop</Button2>
      ) : (
        <Button2 onClick={startHandler}>Start</Button2>
      )}

      <Button3 onClick={resetHandler}>Reset</Button3>
    </Div>
  );
};

export default Timer;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background-color: aqua;
  width: 700px;
  margin: 0 auto;
  height: 300px;
  border-radius: 30px;
`;

const Button1 = styled.button`
  background-color: teal;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 10px;
`;

const Button2 = styled.button`
  background-color: teal;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 10px;
`;

const Button3 = styled.button`
  background-color: teal;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 10px;
`;
