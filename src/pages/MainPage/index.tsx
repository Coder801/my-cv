import { About } from "@modules/About";
import { Education } from "@modules/Education";
import { Summary } from "@modules/Summary";
import { Experience } from "@modules/Experience";
import { Skills } from "@modules/Skills";

import { Lines } from "@components/Lines";
import { CommandLine } from "@components/ComandLine";

import { Typography } from "@ui/Typography";

import style from "./style.module.scss";

export const MainPage = (): JSX.Element => {
  return (
    <main className={style.main}>
      <aside className={style.lines}>
        <Lines />
      </aside>
      <header className={style.header}>
        <Typography tag="h1">Dmytro Onishchenko</Typography>
      </header>
      <section className={style.content}>
        <About />
        <Education />
        <Summary />
        <Experience />
        <Skills />

        <CommandLine />
      </section>
      <section className={style.command}></section>
    </main>
  );
};
