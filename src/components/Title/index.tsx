import styled from "styled-components";

import { Typography } from "@ui/Typography";

const S = {
  Container: styled.div`
    grid-area: command;
  `,
  Name: styled(Typography).attrs({ tag: "h2" })`
    font-size: 40px;
    font-weight: 800;
  `,
  Position: styled(Typography).attrs({ tag: "h3" })``,
};

type TitleProps = {
  name: string;
  position: string;
  className?: string;
};

export const Title = ({ name, position, className }: TitleProps) => (
  <S.Container>
    <S.Name>{name}</S.Name>
    <S.Position tag="h3">{position}</S.Position>
  </S.Container>
);
