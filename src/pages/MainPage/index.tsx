import { About } from "@modules/About";
import { ThemeSwitch } from "@modules/ThemeSwitch";
import { Education } from "@modules/Education";
import { Summary } from "@modules/Summary";
import { Experience } from "@modules/Experience";
import { Skills } from "@modules/Skills";
import { Name } from "@modules/Name";

import { CommandLine } from "@components/CommandLine";
import { Terminal } from "@components/Terminal";
import { Message } from "@components/Message";

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
    grid-template-rows: 1fr 30px;
    grid-template-areas:
      "content"
      "command";
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
      <S.Content>
        <ThemeSwitch />
        <Name />
        <About />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Terminal />
      </S.Content>
      <S.Command>
        <CommandLine />
      </S.Command>
    </S.Main>
  );
};
