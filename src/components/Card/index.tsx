import { ReactNode } from "react";
import styled from "styled-components";

import { Typography } from "@ui/Typography";

const S = {
  Container: styled.article`
    display: block;
    width: 100%;
  `,
  Title: styled(Typography).attrs({ tag: "h2" })`
    text-transform: lowercase;

    &:before {
      content: ".";
      display: inline-block;
      margin: 0 5px;
      color: var(--secondary-color);
    }
  `,
  Content: styled.section`
    display: block;
  `,
};

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Content>{children}</S.Content>
  </S.Container>
);
