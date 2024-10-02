import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

import { changeTheme, Themes } from "./themeSwitchSlice";

const S = {
  Container: styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
  `,
};

export const ThemeSwitch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (theme: Themes) => {
    dispatch(changeTheme(theme));
  };
  return (
    <S.Container onClick={() => onChange("dark")}>Change theme</S.Container>
  );
};
