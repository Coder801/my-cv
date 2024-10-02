import { memo } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";

const S = {
  Container: styled.div``,
  Command: styled.div`
    font-size: 20px;
    color: white;
  `,
};

export const Terminal = memo(() => {
  const commands = useSelector(
    (state: RootState) => state.commandLine.commands
  );

  return (
    <S.Container>
      {commands.map(({ id, value, result }) => (
        <div key={id}>
          <S.Command>{value}</S.Command>
          {result && <S.Command>{result}</S.Command>}
        </div>
      ))}
    </S.Container>
  );
});
