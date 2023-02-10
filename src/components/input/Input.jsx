import useInput from "../hooks/useInput";
import styled from "styled-components";

const Input = () => {
  const {
    value,
    error,
    wrongHandler,
    changeHandler1,
    changeHandler2,
    blurHandler,
  } = useInput();
  return (
    <Div>
      <input
        value={value}
        onChange={changeHandler1}
        onBlur={blurHandler}
        type="email"
      />
      {error ? null : <span style={{ color: "red" }}>Некорректный email</span>}
      <br />
      <input
        value={value}
        onChange={changeHandler2}
        onBlur={wrongHandler}
        type="password"
      />
      {error ? null : <span style={{ color: "red" }}>Некорректный пароль</span>}
    </Div>
  );
};

export default Input;

const Div = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 200px;
  margin-top: 40px;

  input {
    background-color: aqua;
    width: 150px;
    border: none;
    margin: 20px;
    padding: 10px;
  }
  span {
    font-size: 20px;
    font-style: italic;
    font-weight: 900;
  }
`;
