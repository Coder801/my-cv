import { ReactNode } from "react";
import { rgba } from "polished";
import styled from "styled-components";

import { Typography } from "@ui/Typography";

type MessageProps = {
  type: "info" | "error" | "warning";
  children: ReactNode;
};

const S = {
  Container: styled.article<{ type: MessageProps["type"] }>`
    display: flex;
    width: 100%;
    background-color: ${(props) => rgba(props.theme.colors[props.type], 0.1)};
    border-left: 4px solid ${(props) => props.theme.colors[props.type]};
    box-shadow: 0 0 1px 0 ${(props) => props.theme.colors.info};
  `,
  Content: styled.section`
    margin-left: 15px;
  `,
};

export const Message = ({ type = "info", children }: MessageProps) => (
  <S.Container type={type}>
    <S.Content>{children}</S.Content>
  </S.Container>
);
