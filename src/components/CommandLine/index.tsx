import { memo, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

import { typeCommand } from "./commandLineSlice";

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
    font-size: 20px;
  `,
};

export const CommandLine = memo(() => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const onChangeHandler = (event: any) => {
    setValue(event.target.value);
  };

  const onEnterHandler = async (event: any) => {
    if (event.key === "Enter") {
      const id = Date.now();
      await dispatch(
        typeCommand({
          id,
          value,
        })
      );
      setValue("");
    }
  };

  return (
    <S.Input
      value={value}
      placeholder="Try natural language instead the command"
      onChange={(event) => onChangeHandler(event)}
      onKeyDown={(event) => onEnterHandler(event)}
      type="text"
    />
  );
});
