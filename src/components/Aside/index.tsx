import React from "react";

type AsideProps = {
  className: string;
};

export const Aside = ({ className }: AsideProps) => {
  return (
    <aside className={className}>
      <figure className="avatar">
        <img
          src="https://avatars.githubusercontent.com/u/13331449?v=4"
          alt=""
        />
      </figure>
      <article>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <ul>
          <li>+380636126197</li>
          <li>email@email.com</li>
        </ul>
      </article>
      <article>
        <h4>Profile</h4>
      </article>
      <article>
        <h4>Skills</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>CMS</li>
          <li>Angular1.x.js</li>
          <li>React.js</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Jade</li>
          <li>SASS</li>
          <li>Gulp.js</li>
          <li>Git</li>
          <li>TDD testing</li>
        </ul>
      </article>
    </aside>
  );
};
