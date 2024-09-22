import { useState } from "react";
import styled from "styled-components";

const S = {
  Input: styled.input`
    display: block;
    width: 100%;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    caret-color: var(--text-color);
    color: var(--text-color);
    border-radius: 0;
    outline: 0;
  `,
  Value: styled.section`
    display: block;
  `,
};

export const CommandLine = () => {
  const [value, setValue] = useState("");

  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <S.Input
        value={value}
        placeholder="Try natural language instead the command"
        onChange={onChange}
        type="text"
      />
      <S.Value>{value}</S.Value>
    </>
  );
};
