import { About } from "@modules/About";
import { ThemeSwitch } from "@modules/ThemeSwitch";
import { Education } from "@modules/Education";
import { Summary } from "@modules/Summary";
import { Experience } from "@modules/Experience";
import { Skills } from "@modules/Skills";

import { CommandLine } from "@components/CommandLine";
import { Terminal } from "@components/Terminal";
import { Error } from "@components/Error";

import { Typography } from "@ui/Typography";

import styled from "styled-components";

const S = {
  Main: styled.main`
    background-color: #2b293c;
    width: 100%;
    height: 100%;
    padding: 0;
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
    flex-direction: column;
    grid-area: content;
    justify-content: end;
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
        <ThemeSwitch />
        <About />
        <Error command="fsfafa" errorText="Some command not found" />
        {/* <Experience />
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
