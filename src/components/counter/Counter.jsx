import useCounter from "../hooks/useCounter";
import styled from "styled-components";

function Counter() {
  const { count, incrementHandler, decrementHandler, resetHandler } =
    useCounter(2);

  return (
    <Container>
      <Button1 onClick={incrementHandler}>Increment</Button1>
      <div>
        <Count>{count}</Count>
      </div>
      <ButtonCont>
        <Button2 onClick={decrementHandler}>Decrement</Button2>
        <Button3 onClick={resetHandler}>Reset</Button3>
      </ButtonCont>
    </Container>
  );
}

export default Counter;

const Container = styled.div`
  background-color: firebrick;
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 20px;
`;

const Count = styled.h1`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
`;
const Button1 = styled.button`
  background-color: teal;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
`;

const Button2 = styled.button`
  background-color: teal;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 0px;
`;

const Button3 = styled.button`
  background-color: teal;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  margin-left: 10px;
`;
