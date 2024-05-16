import React from "react";

import { Socials } from "../components/Socials";
import { Title } from "../components/Title";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

import style from "./style.module.scss";

export const Layout = (): JSX.Element => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <Title name="Dmytro Onishchenko" position="FrontEnd Developer" />
        <Socials />
      </header>
      <aside className={style.aside}></aside>
      <main className={style.main}></main>
      <footer className={style.footer}></footer>
    </div>
  );
};
