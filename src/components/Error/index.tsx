import styled from "styled-components";

import { Typography } from "@ui/Typography";

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 10px 0;
    border-left: 4px solid var(--color9);
    background-color: ${({ theme }) => theme.colors.primary};
  `,
  Command: styled(Typography)``,
  ErrorText: styled(Typography)``,
};

type ErrorProps = {
  command: string;
  errorText: string;
};

export const Error = ({ command, errorText }: ErrorProps) => {
  return (
    <S.Container>
      <S.Command>{command}</S.Command>
      <S.ErrorText>{errorText}</S.ErrorText>
    </S.Container>
  );
};
