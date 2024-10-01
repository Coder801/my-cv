import { About } from "@modules/About";
import { Education } from "@modules/Education";
import { Summary } from "@modules/Summary";
import { Experience } from "@modules/Experience";
import { Skills } from "@modules/Skills";

import { CommandLine } from "@components/CommandLine";
import { Terminal } from "@components/Terminal";

import { Typography } from "@ui/Typography";

import styled from "styled-components";

const S = {
  Main: styled.main`
    background-color: #2b293c;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 30px;
    grid-template-areas:
      "header"
      "content"
      "command";
  `,
  Header: styled.header`
    grid-area: header;
  `,
  Content: styled.section`
    display: flex;
    align-items: end;
    grid-area: content;
    border: 1px solid white;
  `,
  Command: styled.aside`
    grid-area: command;
  `,
};

export const MainPage = (): JSX.Element => {
  return (
    <S.Main>
      <S.Header>
        <Typography tag="h1">Dmytro Onishchenko</Typography>
      </S.Header>
      <S.Content>
        {/* <About />
        <Experience />
        <Education />
        <Summary />
        <Skills /> */}
        <Terminal />
      </S.Content>
      <S.Command>
        <CommandLine />
      </S.Command>
    </S.Main>
  );
};
