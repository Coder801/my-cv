import React from "react";

import { Lines } from "../../components/Lines";
import { CommandLine } from "../../components/ComandLine";

import { Typography } from "../../UI/Typography";

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
        <section>
          <h3>About Me</h3>
          <p>
            Front-end developer with 10+ years of commercial and start-up
            experience. Building and support of large-scale projects and web
            applications. Experiance with modern (and not so) JavaScript
            frameworks and libraries. I have experience in the development of a
            full cycle, including backend. Huge experience in the team using
            Agile methodology with Scrum\Kanban frameworks.
          </p>
        </section>

        <section>
          <h3>Education</h3>
          <article>
            <p> 2007 - 2013</p>
            <p>Petro Mohyla Black Sea State University</p>
            <p>Computer Science</p>
          </article>
        </section>

        <section>
          <h3>Summary</h3>
          <p>🔹 JS - strong skills. Excellent understanding</p>
          <p>
            🔹 Frameworks - Key framework is React.js and React ecosystem.
            Working with global state managers like Redux\Flux\MobX and
            asynchronously tools (Thunk\Saga). Understanding the module
            architecture of a React application. Experience in creation mobile
            and desktop applications with React Native, Electron. Also have
            basic knowledge of Vue.js.
          </p>
          <p>
            🔹 Markup - Wide experience of HTML/CSS.
            Cross-Browser/Cross-Platform development knowledge of best practices
            for performance. Using preprocessor and postprocessor languages.
            Also understand all modern methodology and using them with JS
            frameworks
          </p>
          <p>
            🔹 Backend - Good knowledge of Node.js. Basic knowledge of
            Python\PHP languages. Understanding the construction of REST API
            applications and client-server communication. Integration with
            3th-part applications. Experience with Django, NextJS, Laravel
            frameworks.
          </p>
          <p>
            🔹 Databases - Experience with SQL/NoSQL Databases like
            MSSQL\MySQL\MongoDB\Postgres etc.
          </p>
          <p>
            🔹 Graphic - experience in raster and vector graphics(Canvas, SVG).
            Graphic Frameworks (GSAP, Snap.svg, D3). Basic understanding of web
            design.
          </p>
          <p>
            🔹 Other - OOP\Functionalmethodology understanding, MV*, Design
            Patterns, SOLID\GRASP principles.
          </p>
        </section>

        <section>
          <h3>Work Experience</h3>
          <article>
            <h4>Frontend Developer</h4>
            <h5>Company</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
              officiis sunt totam tempora voluptatum sit exercitationem eveniet
              nostrum illum, nesciunt aperiam! Similique, voluptates repellat
              accusamus sint vitae eius nisi!
            </p>
          </article>
        </section>

        <section>
          <h3>Skills</h3>
          <article>
            <h4>Frontend Developer</h4>
            <h5>Company</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at
              officiis sunt totam tempora voluptatum sit exercitationem eveniet
              nostrum illum, nesciunt aperiam! Similique, voluptates repellat
              accusamus sint vitae eius nisi!
            </p>
          </article>
        </section>
        <CommandLine />
      </section>
      <section className={style.command}></section>
    </main>
  );
};
