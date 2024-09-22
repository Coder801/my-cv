import { About } from "@modules/About";
import { Education } from "@modules/Education";
import { Summary } from "@modules/Summary";
import { Experience } from "@modules/Experience";
import { Skills } from "@modules/Skills";

import { Lines } from "@components/Lines";
import { CommandLine } from "@components/ComandLine";

import { Typography } from "@ui/Typography";

import styled from "styled-components";

const S = {
  Main: styled.main`
    background-color: #2b293c;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 100px 1fr 50px;
    grid-template-areas:
      "lines header"
      "lines content"
      "command command";
  `,
  Header: styled.header`
    grid-area: header;
  `,
  Lines: styled.aside`
    grid-area: lines;
  `,
  Content: styled.section`
    grid-area: content;
  `,
  Command: styled.aside`
    grid-area: command;
  `,
};

export const MainPage = (): JSX.Element => {
  return (
    <S.Main>
      <S.Lines>
        <Lines />
      </S.Lines>
      <S.Header>
        <Typography tag="h1">Dmytro Onishchenko</Typography>
      </S.Header>
      <S.Content>
        <About />
        <Experience />
        <Education />
        <Summary />
        <Skills />

        <CommandLine />
      </S.Content>
      <S.Command></S.Command>
    </S.Main>
  );
};
