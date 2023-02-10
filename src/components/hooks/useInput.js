import { useState } from "react";

const useInput = () => {
  const [value1, setValue1] = useState("");
  const [error, setError] = useState(false);
  const [value2, setValue2] = useState("");

  const changeHandler1 = (e) => {
    setValue1(e.target.value);
  };
  const changeHandler2 = (e) => {
    setValue2(e.target.value);
  };

  const blurHandler = () => {
    setError(value1.includes("@"));
  };

  const wrongHandler = () => {
    setError(value2.trim().length > 8);
  };

  return {
    value1,
    value2,
    error,
    changeHandler1,
    changeHandler2,
    blurHandler,
    wrongHandler,
  };
};

export default useInput;
