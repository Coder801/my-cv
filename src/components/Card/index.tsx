import { ReactNode } from "react";
import styled from "styled-components";

import { Typography } from "@ui/Typography";

import { Message } from "@components/Message";

type CardProps = {
  type?: "info" | "error";
  title?: string;
  children: ReactNode;
};

const S = {
  Container: styled.article<{ type: CardProps["type"] }>`
    display: block;
    width: 100%;
    padding-right: 15px;
    background-color: ${(props) => (props.type ? "none" : "black")};
    border-right: 4px solid ${(props) => (props.type ? "red" : "black")};
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

export const Card = ({ type = "info", title, children }: CardProps) => (
  <Message type={type}>
    {title && <S.Title>{title}</S.Title>}
    <S.Content>{children}</S.Content>
  </Message>
);
